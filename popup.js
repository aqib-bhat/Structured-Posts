document.getElementById("structureIt").addEventListener("click", async () => {
  const inputThoughtsToPost = document.getElementById("thoughtsToPost").value;
  const outputStructured = document.getElementById("outputStructured");

  outputStructured.textContent = "Getting results ...";
  const rewriterApi = await ai.rewriter.create({
    sharedContext:
      "Rewrite the given text with the following sections: " +
      "Background, Updates, Questions, Action Items, tl;dr",
  });
  let response = await rewriterApi.rewrite(inputThoughtsToPost);

  outputStructured.textContent = response;
});
