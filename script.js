document.getElementById('porosity-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const volumeVoids = parseFloat(document.getElementById('volume-voids').value);
    const volumeTotal = parseFloat(document.getElementById('volume-total').value);
  
    if (volumeTotal === 0) {
      document.getElementById('result').innerText = 'Volume total tidak boleh nol.';
      return;
    }
  
    const porosity = (volumeVoids / volumeTotal) * 100;
  
    document.getElementById('result').innerText = 
      `Porositas adalah ${porosity.toFixed(2)}%.`;
  });
  