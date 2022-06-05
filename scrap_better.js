function main() {
    const generateRandomSentenceButton = document.getElementById('random-sentence');
    const englishTextfield = document.getElementById('english-text');
    const ghettoTextfield = document.getElementById('ghetto-text');
    const allEnglishSentences = [];
    const allGhettoSentences = [];
    let iteration = 1000;
    const obs = new MutationObserver(() => {
        const ghettoText = ghettoTextfield.value;
        if(!ghettoText) return;
        const englishText = englishTextfield.value;
        const englishSentences = englishText.split('.');
        const ghettoSentences = ghettoText.split('.');
        if(englishSentences.length < 2 || ghettoSentences.length < 2) return;
        const englishSentence1 = englishSentences[0].trim();
        const englishSentence2 = englishSentences[1].trim();
        const ghettoSentence1 = ghettoSentences[0].trim();
        const ghettoSentence2 = ghettoSentences[1].trim();
        if(englishSentence1.toLowerCase() != ghettoSentence1.toLowerCase()) {
            allEnglishSentences.push(englishSentence1);
            allGhettoSentences.push(ghettoSentence1);
        }
        if(englishSentence2.toLowerCase() != ghettoSentence2.toLowerCase()) {
            allEnglishSentences.push(englishSentence2);
            allGhettoSentences.push(ghettoSentence2);
        }
        console.log(iteration);
        if(iteration --> 0) {
            return setTimeout(() => generateRandomSentenceButton.click(), 0);
        }
        const zip = allEnglishSentences.map((v, i) => [v, allGhettoSentences[i]]);
        console.log(zip.map(v => `"${v[0]}","${v[1]}"`).join('\n'));
        obs.disconnect();
    });
    obs.observe(ghettoTextfield, {attributes: true});
    generateRandomSentenceButton.click();
}
main();