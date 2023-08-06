let isInitialized = false;

const addCollapsibleCallouts = () => {
  if (isInitialized) {
    console.log("Collapsible Callouts already added!");
    return;
  }

  const collapsibleCallouts = document.querySelectorAll("blockquote.callout-collapsible");
  if (collapsibleCallouts) {
    console.log("Adding Collapsible Callouts");
    collapsibleCallouts.forEach(el => el.addEventListener('click', event => {
      console.log("register collapsible callout event");
      event.currentTarget.classList.toggle("callout-collapsed");
    }));
    isInitialized = true;
  }
}
