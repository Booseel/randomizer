document.addEventListener('keydown', (event) => {

    const keyName = event.key;

    if (keyName === 'Enter') {
      randomize();
    }
  }, false); 