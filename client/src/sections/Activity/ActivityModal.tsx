const overlay = document.getElementById("overlay");

export async function openModal(id: string, modal: boolean) {
  if (!modal || !overlay) return;
//   modal.classList.add("active");
  // overlay.classList.remove("active");
  overlay.classList.remove("opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100");
}

export function closeModal(modal: boolean) {
  if (!modal || !overlay) return;
//   modal.classList.remove("active");
  // overlay.classList.remove("active");
  overlay.classList.add("opacity-0", "pointer-events-none");
  overlay.classList.remove("opacity-100");
}

export function activityEditModal() {
    
}
