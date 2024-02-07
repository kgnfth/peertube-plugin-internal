const register = async ({
    registerHook: hookRegistrar,
    registerSetting: settingRegistrar,
    settingsManager: manager,
    videoPrivacyManager: privacyManager
  }) => {
    await privacyManager.deleteConstant(1); // Public
    await privacyManager.deleteConstant(2); // Unlisted
    await privacyManager.deleteConstant(3); // Private
    await privacyManager.deleteConstant(5); // Password protected
  };
  
  const unregister = async () => {
    return;
  };
  
  module.exports = {
    register,
    unregister
  };