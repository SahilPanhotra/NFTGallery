 <article class="markdown-body entry-content container-lg" itemprop="text"><p dir="auto">NFT Gallery using Alchemy's api
Api documentaion can be found here --&gt; <a href="https://docs.alchemy.com/alchemy/enhanced-apis/nft-api" rel="nofollow">https://docs.alchemy.com/alchemy/enhanced-apis/nft-api</a></p>
<p dir="auto">Project was built following Alchemy's Road To Web3 using Next.js &amp; Tailwind</p>
<p dir="auto">To run</p>
<ol dir="auto">
<li>Clone repo</li>
<li>Run yarn or npm i</li>
<li>Create Alchemy account and generate api key ---&gt; <a href="https://dashboard.alchemyapi.io/" rel="nofollow">https://dashboard.alchemyapi.io/</a></li>
<li>create .env.local file in root directory of project</li>
<li>Add NEXT_PUBLIC_API_KEY=your-key in ".env.local" file </li>
<li>Add api key to index.tsx @line 17</li>
<li>Run on local host using yarn dev or npm dev</li>
</ol>
<p dir="auto">To use
If searching for all nfts from a specific wallet address.
Add address to first input and press "Lets Go"</p>
<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code>If searching for all nfts from a specific address for a specic collection.
  Add wallet address to first input and contract address to the second. Then press "Lets Go"

If searching for all items in a collection.
  Add collection address to second input, select toggle "Fetch for Collection". then press "Lets Go" 
</code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="If searching for all nfts from a specific address for a specic collection.
  Add wallet address to first input and contract address to the second. Then press &quot;Lets Go&quot;

If searching for all items in a collection.
  Add collection address to second input, select toggle &quot;Fetch for Collection&quot;. then press &quot;Lets Go&quot; " tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </clipboard-copy>
  </div></div>
</article>