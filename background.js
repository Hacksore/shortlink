console.log("Background script loaded");
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  // Set a default suggestion based on the input
  suggest([
    {
      content: `gg/${text}`,  // Suggests a search path
      description: `Search for "${text}" on Hacksore`
    }
  ]);
});

chrome.omnibox.onInputEntered.addListener((text) => {
  console.log("Input entered:", text);
  // Redirect to the desired URL when the user selects the suggestion
  const url = `https://hacksore.com/${text}`;
  chrome.tabs.update({ url: url });
});
