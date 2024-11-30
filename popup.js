document.getElementById("structureIt").addEventListener("click", async () => {
  const inputThoughtsToPost = document.getElementById("thoughtsToPost").value;
  const outputStructured = document.getElementById("outputStructured");

  outputStructured.textContent = "Getting results ...";
  const summarizerAPI = await ai.summarizer.create({
    type: "key-points",
    length: "short",
    format: "markdown",
    sharedContext:
      "Summarize the given text with the following sections: " +
      "'Background', 'Updates', 'Questions', 'Action Items', 'tl;dr'",
  });
  let response = await summarizerAPI.summarize(inputThoughtsToPost);

  const markdownConverter = new showdown.Converter();
  outputStructured.textContent = markdownConverter.makeHtml(response);
});
