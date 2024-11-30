document.getElementById("structureIt").addEventListener("click", async () => {
  const inputThoughtsToPost = document.getElementById("thoughtsToPost").value;
  const outputStructured = document.getElementById("outputStructured");

  outputStructured.textContent = "Getting results ...";
  rewriter = await ai.rewriter.create({
    sharedContext:
      "I have some thoughts on my mind that I want to share in an email or chat." +
      "For each text I submit, rewrite it as bullet points with the following sections: " +
      "Background, Updates, Questions, Action Items, TLDR",
  });
  let response = await rewriter.rewrite(reviewEl.textContent, {
    context: inputThoughtsToPost,
  });

  outputStructured.textContent = response;
});
