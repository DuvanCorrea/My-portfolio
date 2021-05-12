self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./dataProfiles.js":
/*!*************************!*\
  !*** ./dataProfiles.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutMe": function() { return /* binding */ aboutMe; },
/* harmony export */   "skills": function() { return /* binding */ skills; },
/* harmony export */   "experiences": function() { return /* binding */ experiences; },
/* harmony export */   "proyects": function() { return /* binding */ proyects; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
// Sobre mi
var aboutMe = {
  imgProfile: "https://avatars.githubusercontent.com/u/28915377?s=400&u=7e1a8f79546e00914598558913ce5d04045fd7dc&v=4",
  fullName: "Duvan Felipe Correa Ardila",
  smallName: "Duvan Correa",
  actualProfession: "Estudiante de ING Informática",
  smallDescripion: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit semper ridiculus, aptent turpis praesent vehicula pretium rhoncus sagittis convallis dignissim erat, nostra arcu nec tristique dis parturient nibh condimentum vivamus.",
  fullDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit semper ridiculus, aptent turpis praesent vehicula pretium rhoncus sagittis convallis dignissim erat, nostra arcu nec tristique dis parturient nibh condimentum vivamus. Lorem ipsum dolor sit amet consectetur adipiscing elit velit semper ridiculus, aptent turpis praesent vehicula pretium rhoncus sagittis convallis dignissim erat, nostra arcu nec tristique dis parturient nibh condimentum vivamus. Lorem ipsum dolor sit amet consectetur adipiscing elit velit semper ridiculus, aptent turpis praesent vehicula pretium rhoncus sagittis convallis dignissim erat, nostra arcu nec tristique dis parturient nibh condimentum vivamus."
}; // Estas son las skill actuales

var skills = [{
  nameSkill: "skill 1",
  percentage: "10%"
}, {
  nameSkill: "skill 2",
  percentage: "20%"
}, {
  nameSkill: "skill 3",
  percentage: "30%"
}, {
  nameSkill: "skill 4",
  percentage: "40%"
}, {
  nameSkill: "skill 5",
  percentage: "50%"
}]; // Estas son mis experiencias

var experiences = [{
  nameExp: "EXPERIENCIA 1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor lectus quisque scelerisque dictumst hac, diam ante nostra sodales tristique vestibulum.",
  time: "2000 - 2010"
}, {
  nameExp: "EXPERIENCIA 2",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor lectus quisque scelerisque dictumst hac, diam ante nostra sodales tristique vestibulum.",
  time: "2000 - 2010"
}, {
  nameExp: "EXPERIENCIA 3",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor lectus quisque scelerisque dictumst hac, diam ante nostra sodales tristique vestibulum.",
  time: "2000 - 2010"
}, {
  nameExp: "EXPERIENCIA 4",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor lectus quisque scelerisque dictumst hac, diam ante nostra sodales tristique vestibulum.",
  time: "2000 - 2010"
}, {
  nameExp: "EXPERIENCIA 5",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor lectus quisque scelerisque dictumst hac, diam ante nostra sodales tristique vestibulum.",
  time: "2000 - 2010"
}]; // mis proyectos 

var proyects = [{
  title: "Titulo del proyecto",
  img: "/images/portfolio1.png",
  description: "Esta es una descripción del proyecto actual",
  url: "#"
}, {
  title: "Titulo del proyecto",
  img: "/images/portfolio1.png",
  description: "Esta es una descripción del proyecto actual",
  url: "#"
}, {
  title: "Titulo del proyecto",
  img: "/images/portfolio1.png",
  description: "Esta es una descripción del proyecto actual",
  url: "#"
}, {
  title: "Titulo del proyecto",
  img: "/images/portfolio1.png",
  description: "Esta es una descripción del proyecto actual",
  url: "#"
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YVByb2ZpbGVzLmpzIl0sIm5hbWVzIjpbImFib3V0TWUiLCJpbWdQcm9maWxlIiwiZnVsbE5hbWUiLCJzbWFsbE5hbWUiLCJhY3R1YWxQcm9mZXNzaW9uIiwic21hbGxEZXNjcmlwaW9uIiwiZnVsbERlc2NyaXB0aW9uIiwic2tpbGxzIiwibmFtZVNraWxsIiwicGVyY2VudGFnZSIsImV4cGVyaWVuY2VzIiwibmFtZUV4cCIsImRlc2NyaXB0aW9uIiwidGltZSIsInByb3llY3RzIiwidGl0bGUiLCJpbWciLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxJQUFNQSxPQUFPLEdBQUc7QUFDbkJDLFlBQVUsRUFBRSx1R0FETztBQUVuQkMsVUFBUSxFQUFFLDRCQUZTO0FBR25CQyxXQUFTLEVBQUUsY0FIUTtBQUluQkMsa0JBQWdCLEVBQUUsK0JBSkM7QUFLbkJDLGlCQUFlLEVBQUUsc09BTEU7QUFNbkJDLGlCQUFlLEVBQUU7QUFORSxDQUFoQixDLENBU1A7O0FBQ08sSUFBTUMsTUFBTSxHQUFHLENBQ2xCO0FBQUVDLFdBQVMsRUFBRSxTQUFiO0FBQXdCQyxZQUFVLEVBQUU7QUFBcEMsQ0FEa0IsRUFFbEI7QUFBRUQsV0FBUyxFQUFFLFNBQWI7QUFBd0JDLFlBQVUsRUFBRTtBQUFwQyxDQUZrQixFQUdsQjtBQUFFRCxXQUFTLEVBQUUsU0FBYjtBQUF3QkMsWUFBVSxFQUFFO0FBQXBDLENBSGtCLEVBSWxCO0FBQUVELFdBQVMsRUFBRSxTQUFiO0FBQXdCQyxZQUFVLEVBQUU7QUFBcEMsQ0FKa0IsRUFLbEI7QUFBRUQsV0FBUyxFQUFFLFNBQWI7QUFBd0JDLFlBQVUsRUFBRTtBQUFwQyxDQUxrQixDQUFmLEMsQ0FRUDs7QUFDTyxJQUFNQyxXQUFXLEdBQUcsQ0FDdkI7QUFBRUMsU0FBTyxFQUFFLGVBQVg7QUFBNEJDLGFBQVcsRUFBRSx3SkFBekM7QUFBbU1DLE1BQUksRUFBRTtBQUF6TSxDQUR1QixFQUV2QjtBQUFFRixTQUFPLEVBQUUsZUFBWDtBQUE0QkMsYUFBVyxFQUFFLHdKQUF6QztBQUFtTUMsTUFBSSxFQUFFO0FBQXpNLENBRnVCLEVBR3ZCO0FBQUVGLFNBQU8sRUFBRSxlQUFYO0FBQTRCQyxhQUFXLEVBQUUsd0pBQXpDO0FBQW1NQyxNQUFJLEVBQUU7QUFBek0sQ0FIdUIsRUFJdkI7QUFBRUYsU0FBTyxFQUFFLGVBQVg7QUFBNEJDLGFBQVcsRUFBRSx3SkFBekM7QUFBbU1DLE1BQUksRUFBRTtBQUF6TSxDQUp1QixFQUt2QjtBQUFFRixTQUFPLEVBQUUsZUFBWDtBQUE0QkMsYUFBVyxFQUFFLHdKQUF6QztBQUFtTUMsTUFBSSxFQUFFO0FBQXpNLENBTHVCLENBQXBCLEMsQ0FRUDs7QUFDTyxJQUFNQyxRQUFRLEdBQUcsQ0FDcEI7QUFBRUMsT0FBSyxFQUFFLHFCQUFUO0FBQWdDQyxLQUFHLEVBQUUsd0JBQXJDO0FBQStESixhQUFXLEVBQUUsNkNBQTVFO0FBQTJISyxLQUFHLEVBQUU7QUFBaEksQ0FEb0IsRUFFcEI7QUFBRUYsT0FBSyxFQUFFLHFCQUFUO0FBQWdDQyxLQUFHLEVBQUUsd0JBQXJDO0FBQStESixhQUFXLEVBQUUsNkNBQTVFO0FBQTJISyxLQUFHLEVBQUU7QUFBaEksQ0FGb0IsRUFHcEI7QUFBRUYsT0FBSyxFQUFFLHFCQUFUO0FBQWdDQyxLQUFHLEVBQUUsd0JBQXJDO0FBQStESixhQUFXLEVBQUUsNkNBQTVFO0FBQTJISyxLQUFHLEVBQUU7QUFBaEksQ0FIb0IsRUFJcEI7QUFBRUYsT0FBSyxFQUFFLHFCQUFUO0FBQWdDQyxLQUFHLEVBQUUsd0JBQXJDO0FBQStESixhQUFXLEVBQUUsNkNBQTVFO0FBQTJISyxLQUFHLEVBQUU7QUFBaEksQ0FKb0IsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmNhNjQ2MDk2ZDllMGVhYzRlNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNvYnJlIG1pXHJcbmV4cG9ydCBjb25zdCBhYm91dE1lID0ge1xyXG4gICAgaW1nUHJvZmlsZTogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMjg5MTUzNzc/cz00MDAmdT03ZTFhOGY3OTU0NmUwMDkxNDU5ODU1ODkxM2NlNWQwNDA0NWZkN2RjJnY9NFwiLFxyXG4gICAgZnVsbE5hbWU6IFwiRHV2YW4gRmVsaXBlIENvcnJlYSBBcmRpbGFcIixcclxuICAgIHNtYWxsTmFtZTogXCJEdXZhbiBDb3JyZWFcIixcclxuICAgIGFjdHVhbFByb2Zlc3Npb246IFwiRXN0dWRpYW50ZSBkZSBJTkcgSW5mb3Jtw6F0aWNhXCIsXHJcbiAgICBzbWFsbERlc2NyaXBpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IHZlbGl0IHNlbXBlciByaWRpY3VsdXMsIGFwdGVudCB0dXJwaXMgcHJhZXNlbnQgdmVoaWN1bGEgcHJldGl1bSByaG9uY3VzIHNhZ2l0dGlzIGNvbnZhbGxpcyBkaWduaXNzaW0gZXJhdCwgbm9zdHJhIGFyY3UgbmVjIHRyaXN0aXF1ZSBkaXMgcGFydHVyaWVudCBuaWJoIGNvbmRpbWVudHVtIHZpdmFtdXMuXCIsXHJcbiAgICBmdWxsRGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IHZlbGl0IHNlbXBlciByaWRpY3VsdXMsIGFwdGVudCB0dXJwaXMgcHJhZXNlbnQgdmVoaWN1bGEgcHJldGl1bSByaG9uY3VzIHNhZ2l0dGlzIGNvbnZhbGxpcyBkaWduaXNzaW0gZXJhdCwgbm9zdHJhIGFyY3UgbmVjIHRyaXN0aXF1ZSBkaXMgcGFydHVyaWVudCBuaWJoIGNvbmRpbWVudHVtIHZpdmFtdXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCB2ZWxpdCBzZW1wZXIgcmlkaWN1bHVzLCBhcHRlbnQgdHVycGlzIHByYWVzZW50IHZlaGljdWxhIHByZXRpdW0gcmhvbmN1cyBzYWdpdHRpcyBjb252YWxsaXMgZGlnbmlzc2ltIGVyYXQsIG5vc3RyYSBhcmN1IG5lYyB0cmlzdGlxdWUgZGlzIHBhcnR1cmllbnQgbmliaCBjb25kaW1lbnR1bSB2aXZhbXVzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgdmVsaXQgc2VtcGVyIHJpZGljdWx1cywgYXB0ZW50IHR1cnBpcyBwcmFlc2VudCB2ZWhpY3VsYSBwcmV0aXVtIHJob25jdXMgc2FnaXR0aXMgY29udmFsbGlzIGRpZ25pc3NpbSBlcmF0LCBub3N0cmEgYXJjdSBuZWMgdHJpc3RpcXVlIGRpcyBwYXJ0dXJpZW50IG5pYmggY29uZGltZW50dW0gdml2YW11cy5cIixcclxufVxyXG5cclxuLy8gRXN0YXMgc29uIGxhcyBza2lsbCBhY3R1YWxlc1xyXG5leHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gICAgeyBuYW1lU2tpbGw6IFwic2tpbGwgMVwiLCBwZXJjZW50YWdlOiBcIjEwJVwiIH0sXHJcbiAgICB7IG5hbWVTa2lsbDogXCJza2lsbCAyXCIsIHBlcmNlbnRhZ2U6IFwiMjAlXCIgfSxcclxuICAgIHsgbmFtZVNraWxsOiBcInNraWxsIDNcIiwgcGVyY2VudGFnZTogXCIzMCVcIiB9LFxyXG4gICAgeyBuYW1lU2tpbGw6IFwic2tpbGwgNFwiLCBwZXJjZW50YWdlOiBcIjQwJVwiIH0sXHJcbiAgICB7IG5hbWVTa2lsbDogXCJza2lsbCA1XCIsIHBlcmNlbnRhZ2U6IFwiNTAlXCIgfVxyXG5dXHJcblxyXG4vLyBFc3RhcyBzb24gbWlzIGV4cGVyaWVuY2lhc1xyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcbiAgICB7IG5hbWVFeHA6IFwiRVhQRVJJRU5DSUEgMVwiLCBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHRvcnRvciBsZWN0dXMgcXVpc3F1ZSBzY2VsZXJpc3F1ZSBkaWN0dW1zdCBoYWMsIGRpYW0gYW50ZSBub3N0cmEgc29kYWxlcyB0cmlzdGlxdWUgdmVzdGlidWx1bS5cIiwgdGltZTogXCIyMDAwIC0gMjAxMFwiIH0sXHJcbiAgICB7IG5hbWVFeHA6IFwiRVhQRVJJRU5DSUEgMlwiLCBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHRvcnRvciBsZWN0dXMgcXVpc3F1ZSBzY2VsZXJpc3F1ZSBkaWN0dW1zdCBoYWMsIGRpYW0gYW50ZSBub3N0cmEgc29kYWxlcyB0cmlzdGlxdWUgdmVzdGlidWx1bS5cIiwgdGltZTogXCIyMDAwIC0gMjAxMFwiIH0sXHJcbiAgICB7IG5hbWVFeHA6IFwiRVhQRVJJRU5DSUEgM1wiLCBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHRvcnRvciBsZWN0dXMgcXVpc3F1ZSBzY2VsZXJpc3F1ZSBkaWN0dW1zdCBoYWMsIGRpYW0gYW50ZSBub3N0cmEgc29kYWxlcyB0cmlzdGlxdWUgdmVzdGlidWx1bS5cIiwgdGltZTogXCIyMDAwIC0gMjAxMFwiIH0sXHJcbiAgICB7IG5hbWVFeHA6IFwiRVhQRVJJRU5DSUEgNFwiLCBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHRvcnRvciBsZWN0dXMgcXVpc3F1ZSBzY2VsZXJpc3F1ZSBkaWN0dW1zdCBoYWMsIGRpYW0gYW50ZSBub3N0cmEgc29kYWxlcyB0cmlzdGlxdWUgdmVzdGlidWx1bS5cIiwgdGltZTogXCIyMDAwIC0gMjAxMFwiIH0sXHJcbiAgICB7IG5hbWVFeHA6IFwiRVhQRVJJRU5DSUEgNVwiLCBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHRvcnRvciBsZWN0dXMgcXVpc3F1ZSBzY2VsZXJpc3F1ZSBkaWN0dW1zdCBoYWMsIGRpYW0gYW50ZSBub3N0cmEgc29kYWxlcyB0cmlzdGlxdWUgdmVzdGlidWx1bS5cIiwgdGltZTogXCIyMDAwIC0gMjAxMFwiIH1cclxuXVxyXG5cclxuLy8gbWlzIHByb3llY3RvcyBcclxuZXhwb3J0IGNvbnN0IHByb3llY3RzID0gW1xyXG4gICAgeyB0aXRsZTogXCJUaXR1bG8gZGVsIHByb3llY3RvXCIsIGltZzogXCIvaW1hZ2VzL3BvcnRmb2xpbzEucG5nXCIsIGRlc2NyaXB0aW9uOiBcIkVzdGEgZXMgdW5hIGRlc2NyaXBjacOzbiBkZWwgcHJveWVjdG8gYWN0dWFsXCIsIHVybDogXCIjXCIgfSxcclxuICAgIHsgdGl0bGU6IFwiVGl0dWxvIGRlbCBwcm95ZWN0b1wiLCBpbWc6IFwiL2ltYWdlcy9wb3J0Zm9saW8xLnBuZ1wiLCBkZXNjcmlwdGlvbjogXCJFc3RhIGVzIHVuYSBkZXNjcmlwY2nDs24gZGVsIHByb3llY3RvIGFjdHVhbFwiLCB1cmw6IFwiI1wiIH0sXHJcbiAgICB7IHRpdGxlOiBcIlRpdHVsbyBkZWwgcHJveWVjdG9cIiwgaW1nOiBcIi9pbWFnZXMvcG9ydGZvbGlvMS5wbmdcIiwgZGVzY3JpcHRpb246IFwiRXN0YSBlcyB1bmEgZGVzY3JpcGNpw7NuIGRlbCBwcm95ZWN0byBhY3R1YWxcIiwgdXJsOiBcIiNcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJUaXR1bG8gZGVsIHByb3llY3RvXCIsIGltZzogXCIvaW1hZ2VzL3BvcnRmb2xpbzEucG5nXCIsIGRlc2NyaXB0aW9uOiBcIkVzdGEgZXMgdW5hIGRlc2NyaXBjacOzbiBkZWwgcHJveWVjdG8gYWN0dWFsXCIsIHVybDogXCIjXCIgfVxyXG5dIl0sInNvdXJjZVJvb3QiOiIifQ==