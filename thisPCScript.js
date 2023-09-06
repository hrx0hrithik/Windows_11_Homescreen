let newValue = localStorage.getItem('theme')
let oldValue
window.addEventListener('storage', function (e) {
    if (e.key === 'theme') {
        // The value associated with 'theme' in localStorage has changed
        newValue = e.newValue;
        // oldValue = e.oldValue;
        // console.log(`'theme' changed from '${oldValue}' to '${newValue}'`);
        if (newValue === 'light') {
            document.body.style.backgroundColor = '#fff'
            document.body.style.color = '#000'
        } else if (newValue === 'dark') {
            document.body.style.backgroundColor = '#000'
            document.body.style.color = '#fff'
        } else {
            document.body.style.backgroundColor = '#fff'
            document.body.style.color = '#000'
        }
    }
});
if (newValue === 'light') {
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000'
} else if (newValue === 'dark') {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
} else {
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000'
}
console.log(newValue)
function updateProgressBar(progressBarId, usedSpace, totalSpace) {
    const progressBar = document.getElementById(progressBarId);
    const fillPercentage = (usedSpace / totalSpace) * 100;

    // Limit the fill percentage to a maximum of 100%
    const limitedFillPercentage = Math.min(fillPercentage, 100);

    progressBar.style.width = `${limitedFillPercentage}%`;
}

function displayStorageSpaceInfo(spaceInfoId, usedPercentage, availablePercentage) {
    const spaceInfo = document.getElementById(spaceInfoId);
    spaceInfo.textContent = `Used: ${usedPercentage.toFixed(2)}% | Available: ${availablePercentage.toFixed(2)}%`;
}

// Update storage space information using navigator.storage.estimate()
navigator.storage.estimate().then(function (estimate) {
    const usedSpace = estimate.usage;
    const totalSpace = estimate.quota;

    const usedPercentage = (usedSpace / totalSpace) * 100;
    const availablePercentage = 100 - usedPercentage;

    displayStorageSpaceInfo('localStorageSpaceInfo', usedPercentage, availablePercentage);
    displayStorageSpaceInfo('sessionStorageSpaceInfo', usedPercentage, availablePercentage);

    updateProgressBar('localStorageProgress', usedSpace, totalSpace);
    updateProgressBar('sessionStorageProgress', usedSpace, totalSpace);
    // for (let i = 0; i < localStorage.length; i++) {
    //     const key = localStorage.key(i);
    //     const value = localStorage.getItem(key);
    //     console.log(`Key: ${key}, Value: ${value}`);
    // }

});