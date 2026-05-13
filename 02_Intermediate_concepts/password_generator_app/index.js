let pass = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")

let allKeys = [
    '!', '"', '#', '$', '%',  '&', "'", '(', ')', '*',
  '+', ',', '-', '.', '/', '0',  '1', '2', '3', '4', '5',
  '6', '7', '8', '9', ':', ';',  '<', '=', '>', '?', '@',
  'A', 'B', 'C', 'D', 'E', 'F',  'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q',  'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a',
  'b', 'c', 'd', 'e', 'f', 'g',  'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w',
  'x', 'y', 'z', '{', '|', '}',  '~'
]

function generatePassword() {
    // Add loading animation
    const button = document.getElementById("generate-pass");
    const originalText = button.textContent;
    button.textContent = "🔄 Generating...";
    button.style.pointerEvents = "none";

    // Add shake animation to password boxes
    const boxes = document.querySelectorAll('.password-box');
    boxes.forEach(box => {
        box.style.animation = 'shake 0.5s ease-in-out';
    });

    setTimeout(() => {
        let password1 = ""
        let password2 = ""

        for(let i = 0; i < 15; i++){
            let randomPass1 = Math.floor(Math.random() * allKeys.length)
            let randomPass2 = Math.floor(Math.random() * allKeys.length)
            password1 += allKeys[randomPass1]
            password2 += allKeys[randomPass2]
        }

        pass.textContent = password1
        pass2.textContent = password2

        // Reset button
        button.textContent = originalText;
        button.style.pointerEvents = "auto";

        // Remove shake animation
        boxes.forEach(box => {
            box.style.animation = '';
        });

        // Add success flash effect
        boxes.forEach(box => {
            box.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.6)';
            setTimeout(() => {
                box.style.boxShadow = '';
            }, 500);
        });
    }, 800);
}

// Add shake animation keyframes via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

