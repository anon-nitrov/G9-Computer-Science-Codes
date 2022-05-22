let randomlyGeneratedNumber = (Math.floor(Math.random() * 1000));

Hundreds    = (Math.floor(randomlyGeneratedNumber / (100)) % 10) * 100;
Tens        = (Math.floor(randomlyGeneratedNumber / (10)) % 10) * 10;
Units       = (Math.floor(randomlyGeneratedNumber) % 10);
Breakdown   = [Hundreds, Tens, Units];

alert(`Randomly Generated Number: ${randomlyGeneratedNumber}\nBreakdown: ${Breakdown}`);