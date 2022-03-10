document.querySelectorAll(".updated").forEach(updatedObj => {
    const updatead = document.createElement("div");
    updatead.innerText = "New Update!"
    updatead.classList.add("update-ad");
    updatedObj.appendChild(updatead);
});

document.querySelectorAll(".forgotten").forEach(updatedObj => {
    const forgottenad = document.createElement("div");
    forgottenad.innerText = "Forgotten."
    forgottenad.classList.add("forgotten-ad");
    updatedObj.appendChild(forgottenad);
});

document.querySelectorAll(".finished").forEach(updatedObj => {
    const finishedad = document.createElement("div");
    finishedad.innerText = "Finished."
    finishedad.classList.add("finished-ad");
    updatedObj.appendChild(finishedad);
});