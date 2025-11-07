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

const downloadForm = document.getElementById("download-form");
const feedbackEl = document.getElementById("form-feedback");

if (downloadForm) {
  downloadForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    feedbackEl.textContent = "Validando pagamento...";
    feedbackEl.classList.remove("form__feedback--error", "form__feedback--success");

    const formData = new FormData(downloadForm);
    const payload = {
      email: formData.get("email")?.trim(),
      token: formData.get("token")?.trim(),
    };

    if (!payload.email || !payload.token) {
      feedbackEl.textContent = "Preencha todos os campos.";
      feedbackEl.classList.add("form__feedback--error");
      return;
    }

    try {
      const response = await fetch("/api/check-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Não foi possível validar o pagamento.");
      }

      feedbackEl.textContent = "Pagamento confirmado! O download será iniciado em instantes.";
      feedbackEl.classList.add("form__feedback--success");

      if (result?.downloadUrl) {
        setTimeout(() => {
          window.location.href = result.downloadUrl;
        }, 1200);
      }
    } catch (error) {
      feedbackEl.textContent = error.message;
      feedbackEl.classList.add("form__feedback--error");
    }
  });
}
