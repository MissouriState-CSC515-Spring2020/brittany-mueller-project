import('./hello.js').then(updateExports => {
    updateExports.default();
});
