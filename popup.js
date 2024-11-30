document.getElementById("structureIt").addEventListener("click", async () => {
  const inputThoughtsToPost = document.getElementById("thoughtsToPost").value;
  const outputStructured = document.getElementById("outputStructured");

  outputStructured.textContent = "Getting results ...";
  const summarizerAPI = await ai.summarize.create({
    type: "text",
    length: "shorter",
    format: "markdown",
    sharedContext:
      "Summarize the given text with the following sections: " +
      "'Background', 'Updates', 'Questions', 'Action Items', 'tl;dr'",
  });
  let response = await summarizerAPI.summarize(inputThoughtsToPost);

  outputStructured.textContent = response;
});
