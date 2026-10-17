import"../chunks/Bzak7iHL.js";import"../chunks/zd_LW5dR.js";import{s as c,h as d,i as e,j as i,k as o,$ as l,n as p}from"../chunks/Ca1cr6g6.js";import{h as m}from"../chunks/ClmE1Ip3.js";import{C as h}from"../chunks/DA9ZdmnT.js";/* empty css                */var g=o('<meta name="description" content="Expose local server control tools and resources directly to AI coding agents."/>'),u=o(`<span class="kicker">Developer Portal</span> <h1>Model Context Protocol (MCP)</h1> <p class="summary">PocketMC implements Anthropic's Model Context Protocol (MCP), allowing local AI agents, Claude Desktop,
	and coding assistants to query and manage your Minecraft servers safely.</p> <h2 id="overview">Overview</h2> <p>The MCP integration allows AI assistants to act as intelligent co-admins. An AI agent can inspect crash
	logs, adjust memory allocations in <code class="mono">server.properties</code>, check player activity,
	and run automated maintenance workflows.</p> <h2 id="configuration">Client Configuration</h2> <p>Add PocketMC to your <code class="mono">claude_desktop_config.json</code> or MCP-compatible editor configuration:</p> <!> <h2 id="available-tools">Available MCP Tools</h2> <p>The PocketMC MCP server exposes the following functions to connected LLM agents:</p> <table><thead><tr><th>Tool Name</th><th>Description</th></tr></thead><tbody><tr><td><code class="mono">pocketmc_list_instances</code></td><td>Retrieves a list of all local servers with their run states and ports.</td></tr><tr><td><code class="mono">pocketmc_start_instance</code></td><td>Launches a designated instance with appropriate Java flags.</td></tr><tr><td><code class="mono">pocketmc_stop_instance</code></td><td>Initiates a graceful RCON flush and stops the server.</td></tr><tr><td><code class="mono">pocketmc_send_command</code></td><td>Executes an admin command in the server console and returns the output.</td></tr><tr><td><code class="mono">pocketmc_get_recent_logs</code></td><td>Streams recent sanitized terminal logs for crash diagnosis.</td></tr></tbody></table> <h2 id="safety-controls">Agent Safety Controls</h2> <p>To protect your system, all actions dispatched via MCP are subject to PocketMC's internal parameter
	sanitization and path traversal validators. Dangerous commands (e.g. system shell execution) are rejected
	at the daemon boundary.</p>`,1);function M(a){var t=u();m("d2eyi9",n=>{var r=g();i(()=>{l.title="Model Context Protocol (MCP) · PocketMC Docs"}),e(n,r)});var s=c(d(t),14);h(s,{label:"claude_desktop_config.json",lang:"json",text:`{
  "mcpServers": {
    "pocketmc": {
      "command": "npx",
      "args": ["-y", "@pocketmc/mcp-server"],
      "env": {
        "POCKETMC_ENDPOINT": "http://127.0.0.1:25580",
        "POCKETMC_TOKEN": "your-api-token"
      }
    }
  }
}`}),p(10),e(a,t)}export{M as component};
