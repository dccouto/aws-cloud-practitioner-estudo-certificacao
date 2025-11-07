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

const notifyForm = document.getElementById("notify-form");
const feedbackEl = document.getElementById("form-feedback");

if (notifyForm) {
  notifyForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    feedbackEl.textContent = "Enviando seus dados...";
    feedbackEl.classList.remove("form__feedback--error", "form__feedback--success");

    const formData = new FormData(notifyForm);
    const payload = {
      name: formData.get("name")?.trim(),
      email: formData.get("email")?.trim(),
      pixReference: formData.get("pixReference")?.trim(),
      message: formData.get("message")?.trim(),
    };

    if (!payload.name || !payload.email) {
      feedbackEl.textContent = "Informe seu nome e e-mail para prosseguir.";
      feedbackEl.classList.add("form__feedback--error");
      return;
    }

    try {
      const response = await fetch("/api/report-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Não foi possível enviar sua mensagem.");
      }

      feedbackEl.textContent = result?.message ?? "Dados enviados com sucesso!";
      feedbackEl.classList.add("form__feedback--success");
      notifyForm.reset();
    } catch (error) {
      feedbackEl.textContent = error.message;
      feedbackEl.classList.add("form__feedback--error");
    }
  });
}
