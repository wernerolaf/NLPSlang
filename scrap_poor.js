function go() {
    const generateRandomSentenceButton = document.getElementById('random-sentence');
    const englishTextfield = document.getElementById('english-text');
    const ghettoTextfield = document.getElementById('ghetto-text');
    const allEnglishSentences = [];
    const allGhettoSentences = [];
    for(let i = 0; i < 10000; ++i) {
        generateRandomSentenceButton.click();
        const ghettoText = ghettoTextfield.value;
        const englishText = englishTextfield.value;
        const englishSentences = englishText.split('.');
        const ghettoSentences = ghettoText.split('.');
        const englishSentence1 = englishSentences[0].trim();
        const englishSentence2 = englishSentences[1].trim();
        const ghettoSentence1 = ghettoSentences[0].trim();
        const ghettoSentence2 = ghettoSentences[1].trim();
        if(englishSentence1 != ghettoSentence1) {
            allEnglishSentences.push(englishSentence1);
            allGhettoSentences.push(ghettoSentence1);
        }
        if(englishSentence2 != ghettoSentence2) {
            allEnglishSentences.push(englishSentence2);
            allGhettoSentences.push(ghettoSentence2);
        }
    }
    const zip = allEnglishSentences.map((v, i) => [v, allGhettoSentences[i]]);
    console.log(zip.map(v => `"${v[0]}","${v[1]}"`).join('\n'))
}
go();