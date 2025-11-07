const modalTriggers = document.querySelectorAll("[data-open-modal]");
const modalCloseTargets = document.querySelectorAll("[data-close-modal]");

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const target = trigger.getAttribute("data-open-modal");
    const modal = document.getElementById(target);
    if (modal) {
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  });
});

modalCloseTargets.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modal = trigger.closest(".modal");
    if (modal) {
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal[aria-hidden='false']").forEach((modal) => {
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });
  }
});

const copyButtons = document.querySelectorAll("[data-copy]");
copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const selector = button.getAttribute("data-copy");
    const element = document.querySelector(selector);
    if (!element) return;

    try {
      await navigator.clipboard.writeText(element.value.trim());
      const originalText = button.textContent;
      button.textContent = "Copiado!";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 2000);
    } catch (error) {
      console.error("Erro ao copiar Pix", error);
      alert("Não foi possível copiar automaticamente. Copie manualmente.");
    }
  });
});

