
export default function ApplicantCertification({ preStep, nextStep }) {
  return (


    <div class="px-20">

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">ApplicantCertification SiteVersion: 1.90.2Node.js: 20.9.0V8: 12.2.281.27-electron.0OS: Windows_NT x64 10.0.19045Version: 1.90.2Commit: 5437499feb04f7a586f677b155b039bc2b3669ebDate: 2024-06-18T22:34:26.404Electron: 29.4.0ElectronBuildId: 9728852Chromium: 122.0.6261.156Node.js: 20.9.0V8: 12.2.281.27-electron.0OS: Windows_NT x64 10.0.19045Version: 1.90.2 Commit: 5437499feb04f7a586f677b155b039bc2b3669ebDate: 2024-06-18T22:34:26.404Electron: 29.4.0ElectronBuildId: 9728852Chromium: 122.0.6261.156Node.js: 20.9.0V8: 12.2.281.27-electron.0OS: Windows_NT x64 10.0.19045Version: 1.90.2Commit: 5437499feb04f7a586f677b155b039bc2b3669ebDate: 2024-06-18T22:34:26.404Electron: 29.4.0ElectronBuildId: 97288Chromium: 122.0.6261.15Node.js: 20.9.0V8: 12.2.281.27-electron.0OS: Windows_NT x64 10.0.1904 Node.js: 20.9.0V8: 12.2.281.27-electron.0OS: Windows_NT x64 10.0.19045Version: 1.90.2Commit: 5437499feb04f7a586f677b155b039bc2b3669ebDate: 2024-06-18T22:34:26.404Electron: 29.4.0ElectronBuildId: 9728852Chromium: 122.0.6261.156Node.js: 20.9.0V8: 12.2.281.27-electron.0OS: Windows_NT x64 10.0.19045Version: 1.90.2 Commit: 5437499feb04f7a586f677b155b039bc2b3669ebDate: 2024-06-18T22:34:26.404Electron: 29.4.0ElectronBuildId: 9728852Chromium: 122.0.6261.156Node.js: 20.9.0V8: 12.2.281.27-electron.0OS: Windows_NT x64 10.0.19045Version: 1.90.2Commit: 5437499feb04f7a586f677b155b039bc2b3669ebDate: 2024-06-18T22:34:26.404Electron: 29.4.0ElectronBuildId: 97288Chromium: 122.0.6261.15Node.js: 20.9.0V8: 12.2.281.27-electron.0OS: Windows_NT x64 10.0.19045</label>
        <p>Acknowledged</p> <label htmlFor="signature" className="block text-gray-700 text-sm font-bold mb-2">
          Signature
        </label>
        <input
          id="signature"
          name="signature"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />

        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
          Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold">IF YES, GIVE DETAILS ON A SEPARATE PAGE AND ATTACH TO THE APPLICATION</label>
      </div>
      <div class="flex items-center justify-between mt-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>
          Back
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={nextStep}>
          Next
        </button>
      </div>



    </div>

  )
}