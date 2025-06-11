window.onload = () => {
  const boxes = document.querySelectorAll('.box1, .box2, .box3');

  document.querySelectorAll('input[name="bundle"]').forEach(radio => {
    radio.addEventListener('change', () => {
      boxes.forEach(box => {
        const containsRadio = box.contains(radio);
        box.querySelectorAll(
          '.option1-row, .option2-row, .option3-row, .options1-labels, .options2-labels, .options3-labels'
        ).forEach(el => {
          el.style.display = containsRadio ? 'flex' : 'none';
        });

        if (!containsRadio) {
          const input = box.querySelector('input[name="bundle"]');
          if (input) input.checked = false;
        }
      });
    });
  });
};
