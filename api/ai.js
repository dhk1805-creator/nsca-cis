// /api/ai.js — Vercel Serverless Function
// Proxy to Anthropic API — supports web_search tool (Cấp 2)

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: "ANTHROPIC_API_KEY not configured" });
  }

  try {
    const { model, max_tokens, system, messages, tools } = req.body;

    // Build request body
    const body = {
      model: model || "claude-sonnet-4-5",
      max_tokens: max_tokens || 1000,
      system: system || "Em la tro ly quan tri thong minh cua NSCA CIS.",
      messages: messages || [],
    };

    // Cấp 2: Forward tools (web_search) nếu có
    if (tools && tools.length > 0) {
      body.tools = tools;
    }

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        // Enable web search beta
        "anthropic-beta": "web-search-2025-03-05",
      },
      body: JSON.stringify(body),
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      console.error("Anthropic API error:", anthropicRes.status, errText);
      return res.status(anthropicRes.status).json({
        error: `Anthropic API error ${anthropicRes.status}`,
        detail: errText.slice(0, 500),
      });
    }

    const data = await anthropicRes.json();

    // Handle tool_use + web search results — extract all text blocks
    if (data.content && Array.isArray(data.content)) {
      const textBlocks = data.content
        .filter(b => b.type === "text")
        .map(b => b.text);

      if (textBlocks.length > 0) {
        // Return merged text + original content for client parsing
        return res.status(200).json({
          ...data,
          // Keep original content array intact for frontend
          content: data.content,
        });
      }
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ error: err.message });
  }
}
