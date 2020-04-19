function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-profile-profile-module"], {
  /***/
  "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js ***!
    \*********************************************************************/

  /*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */

  /***/
  function node_modulesIonicNativeCamera__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestinationType", function () {
      return DestinationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncodingType", function () {
      return EncodingType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaType", function () {
      return MediaType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PictureSourceType", function () {
      return PictureSourceType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function () {
      return PopoverArrowDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Direction", function () {
      return Direction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return Camera;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

    var DestinationType;

    (function (DestinationType) {
      DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
      DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
      DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
    })(DestinationType || (DestinationType = {}));

    var EncodingType;

    (function (EncodingType) {
      EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
      EncodingType[EncodingType["PNG"] = 1] = "PNG";
    })(EncodingType || (EncodingType = {}));

    var MediaType;

    (function (MediaType) {
      MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
      MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
      MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
    })(MediaType || (MediaType = {}));

    var PictureSourceType;

    (function (PictureSourceType) {
      PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
      PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
      PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
    })(PictureSourceType || (PictureSourceType = {}));

    var PopoverArrowDirection;

    (function (PopoverArrowDirection) {
      PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
    })(PopoverArrowDirection || (PopoverArrowDirection = {}));

    var Direction;

    (function (Direction) {
      Direction[Direction["BACK"] = 0] = "BACK";
      Direction[Direction["FRONT"] = 1] = "FRONT";
    })(Direction || (Direction = {}));

    var Camera =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Camera, _super);

      function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */


        _this.DestinationType = {
          /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
          DATA_URL: 0,

          /** Return file uri (content://media/external/images/media/2 for Android) */
          FILE_URI: 1,

          /** Return native uri (eg. asset-library://... for iOS) */
          NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */

        _this.EncodingType = {
          /** Return JPEG encoded image */
          JPEG: 0,

          /** Return PNG encoded image */
          PNG: 1
        };
        /**
         * Convenience constant
         */

        _this.MediaType = {
          /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
          PICTURE: 0,

          /** Allow selection of video only, ONLY RETURNS URL */
          VIDEO: 1,

          /** Allow selection from all media types */
          ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */

        _this.PictureSourceType = {
          /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
          PHOTOLIBRARY: 0,

          /** Take picture from camera */
          CAMERA: 1,

          /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
          SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */

        _this.PopoverArrowDirection = {
          ARROW_UP: 1,
          ARROW_DOWN: 2,
          ARROW_LEFT: 4,
          ARROW_RIGHT: 8,
          ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */

        _this.Direction = {
          /** Use the back-facing camera */
          BACK: 0,

          /** Use the front-facing camera */
          FRONT: 1
        };
        return _this;
      }

      Camera.prototype.getPicture = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPicture", {
          "callbackOrder": "reverse"
        }, arguments);
      };

      Camera.prototype.cleanup = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cleanup", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Camera.pluginName = "Camera";
      Camera.plugin = "cordova-plugin-camera";
      Camera.pluginRef = "navigator.camera";
      Camera.repo = "https://github.com/apache/cordova-plugin-camera";
      Camera.platforms = ["Android", "Browser", "iOS", "Windows"];

      Camera.ɵfac = function Camera_Factory(t) {
        return ɵCamera_BaseFactory(t || Camera);
      };

      Camera.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Camera,
        factory: function factory(t) {
          return Camera.ɵfac(t);
        }
      });

      var ɵCamera_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Camera);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Camera, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return Camera;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FtZXJhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFxRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsMkVBQTJFO1lBQzNFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsOEVBQThFO1lBQzlFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7OztnRUFJMlM7SUE1RnZTLE1BQU0sd0JBRGxCLFVBQVUsRUFBRSxRQUNBLE1BQU07Ozs7OzBCQUFFO2lCQTlLckI7RUE4SzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhT3B0aW9ucyB7XG4gIC8qKiBQaWN0dXJlIHF1YWxpdHkgaW4gcmFuZ2UgMC0xMDAuIERlZmF1bHQgaXMgNTAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBEQVRBX1VSTCA6IDAsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZyAoREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlKSxcbiAgICogICAgICBGSUxFX1VSSSA6IDEsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIE5BVElWRV9VUkkgOiAyICBSZXR1cm4gaW1hZ2UgbmF0aXZlIFVSSVxuICAgKiAgICAgICAgICAoZS5nLiwgYXNzZXRzLWxpYnJhcnk6Ly8gb24gaU9TIG9yIGNvbnRlbnQ6Ly8gb24gQW5kcm9pZClcbiAgICovXG4gIGRlc3RpbmF0aW9uVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgc291cmNlIG9mIHRoZSBwaWN0dXJlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS4gRGVmYXVsdCBpcyBDQU1FUkEuXG4gICAqICAgICAgUEhPVE9MSUJSQVJZIDogMCxcbiAgICogICAgICBDQU1FUkEgOiAxLFxuICAgKiAgICAgIFNBVkVEUEhPVE9BTEJVTSA6IDJcbiAgICovXG4gIHNvdXJjZVR5cGU/OiBudW1iZXI7XG4gIC8qKiBBbGxvdyBzaW1wbGUgZWRpdGluZyBvZiBpbWFnZSBiZWZvcmUgc2VsZWN0aW9uLiAqL1xuICBhbGxvd0VkaXQ/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSByZXR1cm5lZCBpbWFnZSBmaWxlJ3MgZW5jb2RpbmcuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkVuY29kaW5nVHlwZS4gRGVmYXVsdCBpcyBKUEVHXG4gICAqICAgICAgSlBFRyA6IDAgICAgUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZVxuICAgKiAgICAgIFBORyA6IDEgICAgIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZVxuICAgKi9cbiAgZW5jb2RpbmdUeXBlPzogbnVtYmVyO1xuICAvKipcbiAgICogV2lkdGggaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRIZWlnaHQuXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBIZWlnaHQgaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRXaWR0aC5cbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXG4gICAqL1xuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHR5cGUgb2YgbWVkaWEgdG8gc2VsZWN0IGZyb20uIE9ubHkgd29ya3Mgd2hlbiBQaWN0dXJlU291cmNlVHlwZVxuICAgKiBpcyBQSE9UT0xJQlJBUlkgb3IgU0FWRURQSE9UT0FMQlVNLiBEZWZpbmVkIGluIENhbWVyYS5NZWRpYVR5cGVcbiAgICogICAgICBQSUNUVVJFOiAwICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuXG4gICAqICAgICAgICAgIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZVxuICAgKiAgICAgIFZJREVPOiAxICAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgV0lMTCBBTFdBWVMgUkVUVVJOIEZJTEVfVVJJXG4gICAqICAgICAgQUxMTUVESUEgOiAyICAgIGFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlc1xuICAgKi9cbiAgbWVkaWFUeXBlPzogbnVtYmVyO1xuICAvKiogUm90YXRlIHRoZSBpbWFnZSB0byBjb3JyZWN0IGZvciB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZSBkdXJpbmcgY2FwdHVyZS4gKi9cbiAgY29ycmVjdE9yaWVudGF0aW9uPzogYm9vbGVhbjtcbiAgLyoqIFNhdmUgdGhlIGltYWdlIHRvIHRoZSBwaG90byBhbGJ1bSBvbiB0aGUgZGV2aWNlIGFmdGVyIGNhcHR1cmUuICovXG4gIHNhdmVUb1Bob3RvQWxidW0/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlIChmcm9udC0gb3IgYmFjay1mYWNpbmcpLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EaXJlY3Rpb24uIERlZmF1bHQgaXMgQkFDSy5cbiAgICogICAgICBCQUNLOiAwXG4gICAqICAgICAgRlJPTlQ6IDFcbiAgICovXG4gIGNhbWVyYURpcmVjdGlvbj86IG51bWJlcjtcbiAgLyoqIGlPUy1vbmx5IG9wdGlvbnMgdGhhdCBzcGVjaWZ5IHBvcG92ZXIgbG9jYXRpb24gaW4gaVBhZC4gRGVmaW5lZCBpbiBDYW1lcmFQb3BvdmVyT3B0aW9ucy4gKi9cbiAgcG9wb3Zlck9wdGlvbnM/OiBDYW1lcmFQb3BvdmVyT3B0aW9ucztcbn1cblxuLyoqXG4gKiBpT1Mtb25seSBwYXJhbWV0ZXJzIHRoYXQgc3BlY2lmeSB0aGUgYW5jaG9yIGVsZW1lbnQgbG9jYXRpb24gYW5kIGFycm93IGRpcmVjdGlvblxuICogb2YgdGhlIHBvcG92ZXIgd2hlbiBzZWxlY3RpbmcgaW1hZ2VzIGZyb20gYW4gaVBhZCdzIGxpYnJhcnkgb3IgYWxidW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9wb3Zlck9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gdGhlIGFycm93IG9uIHRoZSBwb3BvdmVyIHNob3VsZCBwb2ludC4gRGVmaW5lZCBpbiBDYW1lcmEuUG9wb3ZlckFycm93RGlyZWN0aW9uXG4gICAqIE1hdGNoZXMgaU9TIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGNvbnN0YW50cy5cbiAgICogICAgICBBUlJPV19VUCA6IDEsXG4gICAqICAgICAgQVJST1dfRE9XTiA6IDIsXG4gICAqICAgICAgQVJST1dfTEVGVCA6IDQsXG4gICAqICAgICAgQVJST1dfUklHSFQgOiA4LFxuICAgKiAgICAgIEFSUk9XX0FOWSA6IDE1XG4gICAqL1xuICBhcnJvd0RpcjogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBEZXN0aW5hdGlvblR5cGUge1xuICBEQVRBX1VSTCA9IDAsXG4gIEZJTEVfVVJMLFxuICBOQVRJVkVfVVJJXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kaW5nVHlwZSB7XG4gIEpQRUcgPSAwLFxuICBQTkdcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQVxufVxuXG5leHBvcnQgZW51bSBQaWN0dXJlU291cmNlVHlwZSB7XG4gIFBIT1RPTElCUkFSWSA9IDAsXG4gIENBTUVSQSxcbiAgU0FWRURQSE9UT0FMQlVNXG59XG5cbmV4cG9ydCBlbnVtIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiB7XG4gIEFSUk9XX1VQID0gMSxcbiAgQVJST1dfRE9XTixcbiAgQVJST1dfTEVGVCxcbiAgQVJST1dfUklHSFQsXG4gIEFSUk9XX0FOWVxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlRcbn1cblxuLyoqXG4gKiBAbmFtZSBDYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBDYW1lcmFPcHRpb25zID0ge1xuICogICBxdWFsaXR5OiAxMDAsXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICogICBlbmNvZGluZ1R5cGU6IHRoaXMuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXG4gKiB9XG4gKlxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcbiAqICAvLyBJZiBpdCdzIGJhc2U2NCAoREFUQV9VUkwpOlxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgLy8gSGFuZGxlIGVycm9yXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYU9wdGlvbnNcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBFbmNvZGluZ1R5cGUgPSB7XG4gICAgLyoqIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBKUEVHOiAwLFxuICAgIC8qKiBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBQTkc6IDFcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDJcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiA9IHtcbiAgICBBUlJPV19VUDogMSxcbiAgICBBUlJPV19ET1dOOiAyLFxuICAgIEFSUk9XX0xFRlQ6IDQsXG4gICAgQVJST1dfUklHSFQ6IDgsXG4gICAgQVJST1dfQU5ZOiAxNVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0UGljdHVyZShvcHRpb25zPzogQ2FtZXJhT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgaW1hZ2UgZmlsZXMgdGhhdCBhcmUga2VwdCBpbiB0ZW1wb3Jhcnkgc3RvcmFnZSBhZnRlciBjYWxsaW5nIGNhbWVyYS5nZXRQaWN0dXJlLlxuICAgKiBBcHBsaWVzIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgQ2FtZXJhLnNvdXJjZVR5cGUgZXF1YWxzIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS5DQU1FUkEgYW5kIHRoZSBDYW1lcmEuZGVzdGluYXRpb25UeXBlIGVxdWFscyBDYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-five/profile-five.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-five/profile-five.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProfileFivePageModule */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileFiveProfileFiveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFivePageModule", function () {
      return ProfileFivePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_five_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-five.page */
    "./src/app/pages/yannbf/components/profile/profile-five/profile-five.page.ts");

    var ProfileFivePageModule = function ProfileFivePageModule() {
      _classCallCheck(this, ProfileFivePageModule);
    };

    ProfileFivePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileFivePageModule
    });
    ProfileFivePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileFivePageModule_Factory(t) {
        return new (t || ProfileFivePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileFivePageModule, {
        declarations: [_profile_five_page__WEBPACK_IMPORTED_MODULE_4__["ProfileFivePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFivePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_profile_five_page__WEBPACK_IMPORTED_MODULE_4__["ProfileFivePage"]],
          entryComponents: [_profile_five_page__WEBPACK_IMPORTED_MODULE_4__["ProfileFivePage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-five/profile-five.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-five/profile-five.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProfileFivePage */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileFiveProfileFivePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFivePage", function () {
      return ProfileFivePage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ProfileFivePage = /*#__PURE__*/function () {
      function ProfileFivePage(modalCtrl) {
        _classCallCheck(this, ProfileFivePage);

        this.modalCtrl = modalCtrl;
        this.user = {
          name: 'Cosima Niehaus',
          profileImage: 'assets/yannbf/img/avatar/girl-avatar.png',
          coverImage: 'assets/yannbf/img/background/background-5.jpg',
          occupation: 'Designer',
          location: 'Seattle, WA',
          description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.',
          address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
          phone: '555 555 555',
          email: 'cosima@niehaus.com',
          whatsapp: '555 555 555'
        };
      }

      _createClass(ProfileFivePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }]);

      return ProfileFivePage;
    }();

    ProfileFivePage.ɵfac = function ProfileFivePage_Factory(t) {
      return new (t || ProfileFivePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
    };

    ProfileFivePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileFivePage,
      selectors: [["app-profile-five"]],
      decls: 65,
      vars: 12,
      consts: [["slot", "start"], ["fill", "clear", 3, "click"], ["name", "arrow-back", "slot", "icon-only"], ["parallax-header", "", "no-bounce", ""], [1, "header-image"], [1, "main-content", "ion-text-wrap", "ion-text-center"], [1, "circular"], [1, "profile-description"], ["no-lines", ""], ["name", "mail", "color", "primary", "slot", "start"], ["color", "primary", "slot", "end", 3, "href"], ["slot", "start", "name", "call", "color", "danger"], ["color", "danger", "slot", "end", 3, "href"], ["slot", "start", "name", "logo-whatsapp", "color", "secondary"], ["color", "secondary", "slot", "end", 3, "href"], ["slot", "start", "name", "pin", "color", "twitter"], ["expand", "block", "color", "secondary"], ["name", "logo-linkedin", "slot", "start"], ["expand", "block", "color", "primary"], ["name", "logo-facebook", "slot", "start"], ["expand", "block", "color", "danger"], ["name", "logo-youtube", "slot", "start"]],
      template: function ProfileFivePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileFivePage_Template_ion_button_click_3_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile five");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-list", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ion-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Open App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ion-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Poke me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Whatsapp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Open App ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "ion-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Get in touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ion-button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "ion-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " LinkedIn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ion-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "ion-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Facebook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ion-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Youtube ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.occupation, " \u2022 ", ctx.user.location, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.user.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx.user.phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.whatsapp, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "whatsapp://send?text=Hi from ionic&phone=+", ctx.user.phone, "&abid=+", ctx.user.phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.address);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"]],
      styles: [".header-image[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/yannbf/img/background/background-2.jpg\");\n  height: 30vh;\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n  z-index: -1;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding: 20px;\n  background-color: white;\n  box-shadow: 0px 0px 55px -16px rgba(0, 0, 0, 0.75);\n  position: relative !important;\n}\n\n.circular[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: inherit;\n  border-radius: 50%;\n  -webkit-border-radius: 150px;\n  -moz-border-radius: 150px;\n  border: solid white;\n  background: url(\"/assets/yannbf/img/avatar/cosima-avatar.jpg\") no-repeat;\n  background-size: 100%;\n  margin-top: -70px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.profile-description[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWZpdmUvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHByb2ZpbGVcXHByb2ZpbGUtZml2ZVxccHJvZmlsZS1maXZlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWZpdmUvcHJvZmlsZS1maXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLHVFQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDUjs7QURDSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUdBLGtEQUFBO0VBRUEsNkJBQUE7QUNDUjs7QURDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdFQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURDSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZml2ZS9wcm9maWxlLWZpdmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5oZWFkZXItaW1hZ2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMveWFubmJmL2ltZy9iYWNrZ3JvdW5kL2JhY2tncm91bmQtMi5qcGdcIik7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNTVweCAtMTZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1NXB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1NXB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jaXJjdWxhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTUwcHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxNTBweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMveWFubmJmL2ltZy9hdmF0YXIvY29zaW1hLWF2YXRhci5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuICAgIC5wcm9maWxlLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICB9XHJcbiIsIi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3lhbm5iZi9pbWcvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLTIuanBnXCIpO1xuICBoZWlnaHQ6IDMwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1NXB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1NXB4IC0xNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNTVweCAtMTZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbn1cblxuLmNpcmN1bGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE1MHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDE1MHB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3lhbm5iZi9pbWcvYXZhdGFyL2Nvc2ltYS1hdmF0YXIuanBnXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnByb2ZpbGUtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjODg4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFivePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-five',
          templateUrl: './profile-five.page.html',
          styleUrls: ['./profile-five.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-four/profile-four.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-four/profile-four.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProfileFourPageModule */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileFourProfileFourModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFourPageModule", function () {
      return ProfileFourPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_four_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-four.page */
    "./src/app/pages/yannbf/components/profile/profile-four/profile-four.page.ts");

    var ProfileFourPageModule = function ProfileFourPageModule() {
      _classCallCheck(this, ProfileFourPageModule);
    };

    ProfileFourPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileFourPageModule
    });
    ProfileFourPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileFourPageModule_Factory(t) {
        return new (t || ProfileFourPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileFourPageModule, {
        declarations: [_profile_four_page__WEBPACK_IMPORTED_MODULE_4__["ProfileFourPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFourPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_profile_four_page__WEBPACK_IMPORTED_MODULE_4__["ProfileFourPage"]],
          entryComponents: [_profile_four_page__WEBPACK_IMPORTED_MODULE_4__["ProfileFourPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-four/profile-four.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-four/profile-four.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProfileFourPage */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileFourProfileFourPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFourPage", function () {
      return ProfileFourPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileFourPage_ion_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileFourPage_ion_button_18_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.follow();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Follow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileFourPage_ion_button_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileFourPage_ion_button_19_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r90.follow();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Following ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileFourPage_ion_card_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-avatar", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileFourPage_ion_card_38_Template_img_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var post_r92 = ctx.$implicit;

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r93.imageTapped(post_r92);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileFourPage_ion_card_38_Template_ion_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var post_r92 = ctx.$implicit;

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r95.like(post_r92);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ion-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileFourPage_ion_card_38_Template_ion_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var post_r92 = ctx.$implicit;

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r96.comment(post_r92);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ion-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r92 = ctx.$implicit;

        var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r87.user.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r87.user.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r92.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r92.postImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r92.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r92.likes, " Likes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r92.comments, " Comments ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r92.timestamp, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    var ProfileFourPage = /*#__PURE__*/function () {
      function ProfileFourPage(modalCtrl) {
        _classCallCheck(this, ProfileFourPage);

        this.modalCtrl = modalCtrl;
        this.following = false;
        this.user = {
          name: 'Paula Bolliger',
          profileImage: 'assets/yannbf/img/avatar/girl-avatar.png',
          coverImage: 'assets/yannbf/img/background/background-5.jpg',
          occupation: 'Designer',
          location: 'Seattle, WA',
          description: 'A wise man once said: The more you do something, the better you will become at it.',
          followers: 456,
          following: 1052,
          posts: 35
        };
        this.posts = [{
          postImageUrl: 'assets/yannbf/img/background/background-2.jpg',
          text: "I believe in being strong when everything seems to be going wrong.\n             I believe that happy girls are the prettiest girls.\n             I believe that tomorrow is another day and I believe in miracles.",
          date: 'November 5, 2016',
          likes: 12,
          comments: 4,
          timestamp: '11h ago'
        }, {
          postImageUrl: 'assets/yannbf/img/background/background-3.jpg',
          text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
          date: 'October 23, 2016',
          likes: 30,
          comments: 64,
          timestamp: '30d ago'
        }, {
          postImageUrl: 'assets/yannbf/img/background/background-4.jpg',
          date: 'June 28, 2016',
          likes: 46,
          text: "Hope is the thing with feathers that perches in the soul\n             and sings the tune without the words And never stops at all.",
          comments: 66,
          timestamp: '4mo ago'
        }];
      }

      _createClass(ProfileFourPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "follow",
        value: function follow() {
          this.following = !this.following;
          console.log('Follow user clicked');
        }
      }, {
        key: "imageTapped",
        value: function imageTapped(post) {
          console.log('Post image clicked');
        }
      }, {
        key: "comment",
        value: function comment(post) {
          console.log('Comments clicked');
        }
      }, {
        key: "like",
        value: function like(post) {
          console.log('Like clicked');
        }
      }]);

      return ProfileFourPage;
    }();

    ProfileFourPage.ɵfac = function ProfileFourPage_Factory(t) {
      return new (t || ProfileFourPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
    };

    ProfileFourPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileFourPage,
      selectors: [["app-profile-four"]],
      decls: 39,
      vars: 14,
      consts: [["slot", "start"], ["fill", "clear", 3, "click"], ["name", "arrow-back", "slot", "icon-only"], [1, "ion-padding", "transparent-header"], ["id", "profile-bg", 3, "ngStyle"], ["id", "content"], ["id", "profile-info", 1, "ion-padding"], ["id", "profile-image", 3, "src"], ["id", "profile-name"], [1, "profile-description"], ["size", "small", "color", "tertiary", 3, "click", 4, "ngIf"], ["class", "follow-button", "size", "small", "color", "tertiary", 3, "click", 4, "ngIf"], [1, "profile-numbers"], ["size", "4"], ["id", "posts"], [4, "ngFor", "ngForOf"], ["size", "small", "color", "tertiary", 3, "click"], ["size", "small", "color", "tertiary", 1, "follow-button", 3, "click"], ["name", "checkmark", "slot", "end"], [3, "src"], [1, "sticky"], [3, "src", "click"], ["color", "purple", "fill", "clear", "size", "small", 3, "click"], ["name", "thumbs-up", "slot", "start"], ["size", "5"], ["color", "purple", "fill", "clear", "size", "small", 1, "ion-no-padding", 3, "click"], ["name", "text", "slot", "start"], ["size", "3", "align-self-center", "", 1, "ion-text-center"]],
      template: function ProfileFourPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileFourPage_Template_ion_button_click_3_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile four");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileFourPage_ion_button_18_Template, 2, 0, "ion-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileFourPage_ion_button_19_Template, 3, 0, "ion-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-row", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProfileFourPage_ion_card_38_Template, 26, 8, "ion-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, "url(" + ctx.user.coverImage + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.occupation, " \u2022 ", ctx.user.location, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.following);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.following);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.followers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.following);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.posts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(0deg, #eeeef1 0%, white 80%, white 100%);\n}\n\nion-button[_ngcontent-%COMP%], .button-md[_ngcontent-%COMP%], .button-ios[_ngcontent-%COMP%] {\n  text-transform: none !important;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  --background: transparent;\n  position: absolute;\n}\n\np[_ngcontent-%COMP%] {\n  color: #444;\n}\n\n#profile-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  margin-top: -16px;\n  height: 160px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  text-align: center;\n}\n\n#content[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 150px;\n  padding-top: 200px;\n  text-align: center;\n}\n\n#profile-image[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 50%;\n  width: auto;\n  height: 100px;\n  margin: 0 auto 0;\n  box-shadow: 0px 11px 20px -3px rgba(142, 136, 146, 0.75);\n}\n\n#profile-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -95px;\n  width: 100%;\n  z-index: 2;\n  text-align: center;\n}\n\n#profile-name[_ngcontent-%COMP%] {\n  color: #444;\n  font-size: 26px;\n}\n\n.profile-description[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #888;\n}\n\n.follow-button[_ngcontent-%COMP%] {\n  text-transform: none;\n  border-radius: 3px !important;\n}\n\n.follow-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-left: 5px;\n  font-size: 1.5rem;\n}\n\n.profile-numbers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #444;\n  font-size: medium;\n  margin-bottom: 3px;\n}\n\n.profile-numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 2.4rem;\n  color: #34354c;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  height: 1px;\n  background: #444;\n  background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, #bcc6d6 50%, rgba(0, 0, 0, 0) 100%);\n}\n\n#posts[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWZvdXIvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHByb2ZpbGVcXHByb2ZpbGUtZm91clxccHJvZmlsZS1mb3VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWZvdXIvcHJvZmlsZS1mb3VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNFQUFBO0FDQ0Y7O0FERUE7OztFQUdFLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0RBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ09GOztBRExBO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQ1FGOztBRFBFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDU0o7O0FESkU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ09KOztBRExFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNPSjs7QURKQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrR0FBQTtBQ09GOztBREpBO0VBQ0UsbUJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3VyL3Byb2ZpbGUtZm91ci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2VlZWVmMSAwJSwgd2hpdGUgODAlLCB3aGl0ZSAxMDAlKTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbixcclxuLmJ1dHRvbi1tZCxcclxuLmJ1dHRvbi1pb3Mge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFycm93IHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5wIHtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG4vLyBDb3ZlciBpbWFnZVxyXG4jcHJvZmlsZS1iZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vLyBQcm9maWxlIGNvbnRlbnRcclxuI2NvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNwcm9maWxlLWltYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46IDAgYXV0byAwO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDIwcHggLTNweCByZ2JhKDE0MiwgMTM2LCAxNDYsIDAuNzUpO1xyXG59XHJcbiNwcm9maWxlLWluZm8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC05NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNwcm9maWxlLW5hbWUge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG4ucHJvZmlsZS1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcbi5mb2xsb3ctYnV0dG9uIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcbi8vIEZvbGxvd2luZywgRm9sbG93ZXJzIGFuZCBhbGwuLlxyXG4ucHJvZmlsZS1udW1iZXJzIHtcclxuICBwIHtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgIGNvbG9yOiAjMzQzNTRjO1xyXG4gIH1cclxufVxyXG5ociB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICM0NDQ7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgaHNsYSgwLCAwJSwgMCUsIDApIDAlLCByZ2IoMTg4LCAxOTgsIDIxNCkgNTAlLCBoc2xhKDAsIDAlLCAwJSwgMCkgMTAwJSk7XHJcbn1cclxuLy8gUG9zdHMgZmVlZFxyXG4jcG9zdHMge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZWVlZWYxIDAlLCB3aGl0ZSA4MCUsIHdoaXRlIDEwMCUpO1xufVxuXG5pb24tYnV0dG9uLFxuLmJ1dHRvbi1tZCxcbi5idXR0b24taW9zIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmFycm93IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5wIHtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbiNwcm9maWxlLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcHJvZmlsZS1pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0byAwO1xuICBib3gtc2hhZG93OiAwcHggMTFweCAyMHB4IC0zcHggcmdiYSgxNDIsIDEzNiwgMTQ2LCAwLjc1KTtcbn1cblxuI3Byb2ZpbGUtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3Byb2ZpbGUtbmFtZSB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5wcm9maWxlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzg4ODtcbn1cblxuLmZvbGxvdy1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG4uZm9sbG93LWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5wcm9maWxlLW51bWJlcnMgcCB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuLnByb2ZpbGUtbnVtYmVycyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBjb2xvcjogIzM0MzU0Yztcbn1cblxuaHIge1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDAsIDAsIDAsIDApIDAlLCAjYmNjNmQ2IDUwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbn1cblxuI3Bvc3RzIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFourPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-four',
          templateUrl: './profile-four.page.html',
          styleUrls: ['./profile-four.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-one/profile-one.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-one/profile-one.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProfileOnePageModule */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileOneProfileOneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileOnePageModule", function () {
      return ProfileOnePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_one_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-one.page */
    "./src/app/pages/yannbf/components/profile/profile-one/profile-one.page.ts");

    var ProfileOnePageModule = function ProfileOnePageModule() {
      _classCallCheck(this, ProfileOnePageModule);
    };

    ProfileOnePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileOnePageModule
    });
    ProfileOnePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileOnePageModule_Factory(t) {
        return new (t || ProfileOnePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileOnePageModule, {
        declarations: [_profile_one_page__WEBPACK_IMPORTED_MODULE_4__["ProfileOnePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileOnePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_profile_one_page__WEBPACK_IMPORTED_MODULE_4__["ProfileOnePage"]],
          entryComponents: [_profile_one_page__WEBPACK_IMPORTED_MODULE_4__["ProfileOnePage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-one/profile-one.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-one/profile-one.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: ProfileOnePage */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileOneProfileOnePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileOnePage", function () {
      return ProfileOnePage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileOnePage_ion_item_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r98 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r98.text, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", post_r98.created_at, " something");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    var ProfileOnePage = /*#__PURE__*/function () {
      function ProfileOnePage(modalCtrl) {
        _classCallCheck(this, ProfileOnePage);

        this.modalCtrl = modalCtrl;
        this.posts = [];
        this.imageUrl = 'assets/yannbf/img/profile/profile-cover.jpg';

        for (var i = 0; i < 10; i++) {
          this.posts[i] = {
            text: 'Post text ' + i,
            created_at: i + 1
          };
        }
      }

      _createClass(ProfileOnePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }]);

      return ProfileOnePage;
    }();

    ProfileOnePage.ɵfac = function ProfileOnePage_Factory(t) {
      return new (t || ProfileOnePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
    };

    ProfileOnePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileOnePage,
      selectors: [["app-profile-one"]],
      decls: 26,
      vars: 4,
      consts: [["slot", "start"], ["fill", "clear", 3, "click"], ["name", "arrow-back", "slot", "icon-only"], ["id", "profile-bg", 3, "ngStyle"], ["id", "content"], ["id", "profile-info"], ["id", "profile-image", "src", "assets/yannbf/img/profile/profile-2.jpg"], ["id", "profile-name"], ["id", "profile-description"], ["href", "http://twitter.com/ionicframework"], ["href", "http://twitter.com/driftyco"], [4, "ngFor", "ngForOf"], ["src", "assets/yannbf/img/misc/cat.jpg", 1, "post-profile-image"], [1, "post-time"], [1, "post-options"], ["name", "undo"]],
      template: function ProfileOnePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileOnePage_Template_ion_button_click_3_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Traveler, geek and animal lover.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Follow my ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "@facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "@twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " accounts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileOnePage_ion_item_25_Template, 7, 2, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + ctx.imageUrl + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"]],
      styles: ["#profile-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  width: 100%;\n  height: 150px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 20%;\n  text-align: center;\n}\n\n#content[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 150px;\n  background-color: white;\n  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.4);\n  padding-top: 200px;\n}\n\n#profile-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -95px;\n  width: 100%;\n  z-index: 2;\n  text-align: center;\n}\n\n#profile-name[_ngcontent-%COMP%] {\n  color: #444;\n  font-size: 26px;\n}\n\n#profile-description[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #888;\n}\n\n#profile-description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n}\n\n#profile-image[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 128px;\n  height: 128px;\n  margin: 30px auto 0;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7);\n}\n\n.list-item-content[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  color: #666666;\n}\n\n.post[_ngcontent-%COMP%] {\n  color: #444;\n}\n\n.post-time[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  font-size: 11px;\n  color: #888;\n}\n\n.post-profile-image[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  width: 48px;\n  height: 48px;\n  margin-right: 10px;\n}\n\n.post-options[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 16px;\n  right: 5px;\n  bottom: 5px;\n  color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLW9uZS9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xccHJvZmlsZVxccHJvZmlsZS1vbmVcXHByb2ZpbGUtb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLW9uZS9wcm9maWxlLW9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBRUEsa0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDREo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVFO0VBQ0UsV0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLW9uZS9wcm9maWxlLW9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZS1iZyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLy90b3A6IDQ0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMjAlO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICNjb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCAxMHB4IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICB9XHJcblxyXG4gICNwcm9maWxlLWluZm8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgI3Byb2ZpbGUtbmFtZSB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbiAgI3Byb2ZpbGUtZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgfVxyXG4gICNwcm9maWxlLWRlc2NyaXB0aW9uIGEge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgfVxyXG5cclxuICAjcHJvZmlsZS1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIHdpZHRoOiAxMjhweDtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLDAsMCwwLjcpO1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtaXRlbS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIC5saXN0LWl0ZW0ge1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgfVxyXG5cclxuICAucG9zdCB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICB9XHJcblxyXG4gIC5wb3N0LXRpbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgfVxyXG5cclxuICAucG9zdC1wcm9maWxlLWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLnBvc3Qtb3B0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICB9IiwiI3Byb2ZpbGUtYmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwYWRkaW5nLXRvcDogMjAwcHg7XG59XG5cbiNwcm9maWxlLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTk1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwcm9maWxlLW5hbWUge1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4jcHJvZmlsZS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM4ODg7XG59XG5cbiNwcm9maWxlLWRlc2NyaXB0aW9uIGEge1xuICBjb2xvcjogIzg4ODtcbn1cblxuI3Byb2ZpbGUtaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4ubGlzdC1pdGVtLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5saXN0LWl0ZW0ge1xuICBjb2xvcjogIzY2NjY2Njtcbn1cblxuLnBvc3Qge1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLnBvc3QtdGltZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5wb3N0LXByb2ZpbGUtaW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnBvc3Qtb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICByaWdodDogNXB4O1xuICBib3R0b206IDVweDtcbiAgY29sb3I6ICM4ODg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileOnePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-one',
          templateUrl: './profile-one.page.html',
          styleUrls: ['./profile-one.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-settings/profile-settings.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-settings/profile-settings.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ProfileSettingsPageModule */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileSettingsProfileSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileSettingsPageModule", function () {
      return ProfileSettingsPageModule;
    });
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-settings.page */
    "./src/app/pages/yannbf/components/profile/profile-settings/profile-settings.page.ts");

    var ProfileSettingsPageModule = function ProfileSettingsPageModule() {
      _classCallCheck(this, ProfileSettingsPageModule);
    };

    ProfileSettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProfileSettingsPageModule
    });
    ProfileSettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ProfileSettingsPageModule_Factory(t) {
        return new (t || ProfileSettingsPageModule)();
      },
      providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__["Camera"]] // <-- PLUGN FOR CAMERA
      ,
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileSettingsPageModule, {
        declarations: [_profile_settings_page__WEBPACK_IMPORTED_MODULE_5__["ProfileSettingsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileSettingsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
          declarations: [_profile_settings_page__WEBPACK_IMPORTED_MODULE_5__["ProfileSettingsPage"]],
          entryComponents: [_profile_settings_page__WEBPACK_IMPORTED_MODULE_5__["ProfileSettingsPage"]],
          providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__["Camera"]] // <-- PLUGN FOR CAMERA

        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-settings/profile-settings.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-settings/profile-settings.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ProfileSettingsPage */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileSettingsProfileSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileSettingsPage", function () {
      return ProfileSettingsPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileSettingsPage_ion_select_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var language_r82 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](language_r82);
      }
    }

    function ProfileSettingsPage_ion_select_option_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var method_r83 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", method_r83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](method_r83);
      }
    }

    function ProfileSettingsPage_ion_select_option_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var currency_r84 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", currency_r84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currency_r84);
      }
    }

    var ProfileSettingsPage = /*#__PURE__*/function () {
      function ProfileSettingsPage(modalCtrl, camera) {
        _classCallCheck(this, ProfileSettingsPage);

        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.placeholderPicture = 'http://api.adorable.io/avatar/200/bob';
        this.enableNotifications = true;
        this.languages = ['English', 'Portuguese', 'French'];
        this.paymentMethods = ['Paypal', 'Credit Card'];
        this.currencies = ['USD', 'BRL', 'EUR'];
        this.user = {
          name: 'Marty Mcfly',
          imageUrl: 'assets/yannbf/img/avatar/marty-avatar.png'
        };
      }

      _createClass(ProfileSettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "toggleNotifications",
        value: function toggleNotifications() {
          if (this.enableNotifications) {
            console.log('Notifications enabled.');
          } else {
            console.log('Notifications disabled.');
          }
        }
      }, {
        key: "updateImage",
        value: function updateImage(value) {
          this.profilePicture = 'data:image/jpeg;base64,' + value.val();
        }
      }, {
        key: "updateProfileImage",
        value: function updateProfileImage() {
          var _this2 = this;

          this.camera.getPicture({
            quality: 50,
            allowEdit: true,
            cameraDirection: this.camera.Direction.FRONT,
            destinationType: this.camera.DestinationType.DATA_URL
          }).then(function (imageData) {
            _this2.user.imageUrl = imageData;
          }, function (err) {
            console.log('Error: ' + err);
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          console.log('Logged out of the application');
        }
      }]);

      return ProfileSettingsPage;
    }();

    ProfileSettingsPage.ɵfac = function ProfileSettingsPage_Factory(t) {
      return new (t || ProfileSettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]));
    };

    ProfileSettingsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileSettingsPage,
      selectors: [["app-profile-settings"]],
      decls: 56,
      vars: 9,
      consts: [["slot", "start"], ["fill", "clear", 3, "click"], ["name", "arrow-back", "slot", "icon-only"], ["lines", "full"], ["slot", "start", 3, "click"], [3, "src"], [1, "username"], ["no-border", ""], ["lines", "inset"], ["name", "settings", "slot", "start"], [1, "label"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "notifications", "slot", "start"], ["slot", "end", 3, "ngModel", "ngModelChange", "click"], ["name", "card", "slot", "start"], ["name", "logo-usd", "slot", "start"], ["lines", "none"], ["name", "power", "slot", "start"], ["slot", "end", 3, "click"], [3, "value"]],
      template: function ProfileSettingsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsPage_Template_ion_button_click_3_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-avatar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsPage_Template_ion_avatar_click_10_listener() {
            return ctx.updateProfileImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Owner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "App Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileSettingsPage_Template_ion_select_ngModelChange_25_listener($event) {
            return ctx.language = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProfileSettingsPage_ion_select_option_26_Template, 2, 2, "ion-select-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Enable notifications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-toggle", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileSettingsPage_Template_ion_toggle_ngModelChange_31_listener($event) {
            return ctx.enableNotifications = $event;
          })("click", function ProfileSettingsPage_Template_ion_toggle_click_31_listener() {
            return ctx.toggleNotifications();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ion-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Payment Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileSettingsPage_Template_ion_select_ngModelChange_40_listener($event) {
            return ctx.paymentMethod = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ProfileSettingsPage_ion_select_option_41_Template, 2, 2, "ion-select-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ion-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ion-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ion-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileSettingsPage_Template_ion_select_ngModelChange_46_listener($event) {
            return ctx.currency = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProfileSettingsPage_ion_select_option_47_Template, 2, 2, "ion-select-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ion-list-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Otherion-radio-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ion-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ion-button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingsPage_Template_ion_button_click_54_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.imageUrl ? ctx.user.imageUrl : ctx.placeholderPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.enableNotifications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.paymentMethod);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentMethods);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currency);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currencies);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSelectOption"]],
      styles: [".username[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n\n.label[_ngcontent-%COMP%] {\n  color: #7f7f7f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXNldHRpbmdzL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxwcm9maWxlXFxwcm9maWxlLXNldHRpbmdzXFxwcm9maWxlLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXNldHRpbmdzL3Byb2ZpbGUtc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1zZXR0aW5ncy9wcm9maWxlLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VybmFtZSB7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG4ubGFiZWwge1xyXG4gIGNvbG9yOiAjN2Y3ZjdmO1xyXG59XHJcbiIsIi51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi5sYWJlbCB7XG4gIGNvbG9yOiAjN2Y3ZjdmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileSettingsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-settings',
          templateUrl: './profile-settings.page.html',
          styleUrls: ['./profile-settings.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-three/profile-three.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-three/profile-three.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: ProfileThreePageModule */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileThreeProfileThreeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileThreePageModule", function () {
      return ProfileThreePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_three_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-three.page */
    "./src/app/pages/yannbf/components/profile/profile-three/profile-three.page.ts");

    var ProfileThreePageModule = function ProfileThreePageModule() {
      _classCallCheck(this, ProfileThreePageModule);
    };

    ProfileThreePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileThreePageModule
    });
    ProfileThreePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileThreePageModule_Factory(t) {
        return new (t || ProfileThreePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileThreePageModule, {
        declarations: [_profile_three_page__WEBPACK_IMPORTED_MODULE_4__["ProfileThreePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileThreePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_profile_three_page__WEBPACK_IMPORTED_MODULE_4__["ProfileThreePage"]],
          entryComponents: [_profile_three_page__WEBPACK_IMPORTED_MODULE_4__["ProfileThreePage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-three/profile-three.page.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-three/profile-three.page.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProfileThreePage */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileThreeProfileThreePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileThreePage", function () {
      return ProfileThreePage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileThreePage_ion_card_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-avatar", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileThreePage_ion_card_27_Template_img_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var post_r74 = ctx.$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.imageTapped(post_r74);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileThreePage_ion_card_27_Template_ion_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var post_r74 = ctx.$implicit;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.like(post_r74);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ion-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileThreePage_ion_card_27_Template_ion_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var post_r74 = ctx.$implicit;

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.comment(post_r74);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r74 = ctx.$implicit;

        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r73.user.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r73.user.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r74.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r74.postImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r74.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r74.likes, " Likes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r74.comments, " Comments ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r74.timestamp, " ");
      }
    }

    var ProfileThreePage = /*#__PURE__*/function () {
      function ProfileThreePage(modalCtrl) {
        _classCallCheck(this, ProfileThreePage);

        this.modalCtrl = modalCtrl;
        this.posts = [{
          postImageUrl: 'assets/yannbf/img/background/background-2.jpg',
          text: "I believe in being strong when everything seems to be going wrong.\n             I believe that happy girls are the prettiest girls.\n             I believe that tomorrow is another day and I believe in miracles.",
          date: 'November 5, 2016',
          likes: 12,
          comments: 4,
          timestamp: '11h ago'
        }, {
          postImageUrl: 'assets/yannbf/img/background/background-3.jpg',
          text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
          date: 'October 23, 2016',
          likes: 30,
          comments: 64,
          timestamp: '30d ago'
        }, {
          postImageUrl: 'assets/yannbf/img/background/background-4.jpg',
          date: 'June 28, 2016',
          likes: 46,
          text: "Hope is the thing with feathers that perches in the soul\n             and sings the tune without the words And never stops at all.",
          comments: 66,
          timestamp: '4mo ago'
        }];
        this.user = {
          name: 'Cosima Niehaus',
          twitter: '@CheekyEvoDevo',
          profileImage: 'assets/yannbf/img/avatar/cosima-avatar.jpg',
          followers: 456,
          following: 1052,
          tweets: 35
        };
      }

      _createClass(ProfileThreePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "imageTapped",
        value: function imageTapped(post) {
          console.log('Post image clicked');
        }
      }, {
        key: "comment",
        value: function comment(post) {
          console.log('Comments clicked');
        }
      }, {
        key: "like",
        value: function like(post) {
          console.log('Like clicked');
        }
      }]);

      return ProfileThreePage;
    }();

    ProfileThreePage.ɵfac = function ProfileThreePage_Factory(t) {
      return new (t || ProfileThreePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
    };

    ProfileThreePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileThreePage,
      selectors: [["app-profile-three"]],
      decls: 28,
      vars: 6,
      consts: [[1, "container", "transparent-header"], [1, "card-profile"], [1, "card-profile_visual"], [1, "card-profile_user-infos"], [1, "infos_name"], [1, "infos_nick"], ["href", "#"], [1, "card-profile_user-stats"], [1, "stats-holder"], [1, "user-stats"], ["id", "posts"], [4, "ngFor", "ngForOf"], ["slot", "start"], [3, "src"], [1, "sticky"], [3, "src", "click"], ["color", "purple", "fill", "clear", "size", "small", 3, "click"], ["name", "thumbs-up", "slot", "start"], ["name", "text", "slot", "start"], ["align-self-center", "", 1, "ion-text-center"]],
      template: function ProfileThreePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tweets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Following");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProfileThreePage_ion_card_27_Template, 26, 8, "ion-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.twitter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.tweets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.following);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.followers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]],
      styles: ["@font-face {\n  font-family: \"ProximaNova-Regular\";\n  src: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/64/ProximaNova-Regular.eot\");\n  src: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/64/ProximaNova-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/64/ProximaNova-Regular.woff\") format(\"woff\"), url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/64/ProximaNova-Regular.ttf\") format(\"truetype\"), url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/64/ProximaNova-Regular.svg#rocketdesign-font\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n[_ngcontent-%COMP%]:root {\n  font-size: 16px;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  float: left;\n}\nbody[_ngcontent-%COMP%] {\n  background: #f0efed;\n  background-image: linear-gradient(to bottom, #e5e4e5, #c2c1c2);\n  font-family: \"ProximaNova-Regular\", Helvetica neue, sans-serif;\n}\n#posts[_ngcontent-%COMP%] {\n  margin-top: 20vh;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  margin: auto;\n}\n.card-profile[_ngcontent-%COMP%] {\n  float: left;\n  position: absolute;\n  width: 100%;\n  height: 80vh;\n  background: #fff;\n  z-index: 1;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n.card-profile_visual[_ngcontent-%COMP%] {\n  height: 68%;\n  overflow: hidden;\n  position: relative;\n  background: linear-gradient(to bottom, #3b3c3f, #263d85, #172551);\n}\n.card-profile_visual[_ngcontent-%COMP%]:before, .card-profile_visual[_ngcontent-%COMP%]:after {\n  display: block;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n  background-image: url(\"/assets/yannbf/img/avatar/cosima-avatar.jpg\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.5;\n  mix-blend-mode: lighten;\n}\n.card-profile_visual[_ngcontent-%COMP%]:before {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n.card-profile_visual[_ngcontent-%COMP%]:after {\n  z-index: 2;\n  mix-blend-mode: lighten;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAABUUlRERkRMSkxMTkxEQkT490VOAAAAAXRSTlMAQObYZgAAAoxJREFUOI0dlImR5DAIRRXDbgaAEwCcAOAEZE/+qczTdFf1JQH/otd4SJWWf5+m7GjR28Z0TZW38pLjj1aWJl9eWaGfaCq/y4y012hPhqySnnbXe7Q6ulK6nZeV5bpjhyo9xLj7apvFSk3zSXEmtEZmNngYbhWhkmKne7XalnDrYcZMNwMlwuQuj/ezS2dJmpjEFwLe7T7zWE0zo22icr4dNZnfOLUp72rNcA8vcx3Y8r3MZpYOPSAC6mfSGRQBD1sZyFPd9b0mohN70CQTSa6+Ik15RifUaCjWq6zp2/9T697e5VsRKGUl4I4WnWpOxVAI7FoMEsrp2gLUCgH9J84B8o1Sgrb+0auEdrpocIQzU94mHBmMuliIlFemt0s8w3mUe0ssLnaecjllDunTW20d33ZxkUOoSIJbrWxZiHjdhV190e5AzjwONn4ASvTCC5CcKfywuFMBe1QpYjG0x38nJYAcR26k54o8YiXqeC7Hcth54lfwSPlHOBfOE9F0rGguJsr1V+GroafdEC+3qK2HX8Qsf0lWEwX0J29Pkh2lmFB33wKZBB8Rlhpj5AVBd6mTMYBC4cZzKNb6SygJJ3dnNIqkHnuwVgvaoCFcomyI6c+QEvxq0tKEiQCe9QoS18kaKFMl7wqEqJ2A6XkQMejE1dEcu7G/g1JRmHMOkjGIvqXHErayVgdJIIJsGBw1LzaijlFdExOIInKEOZ/oReBCsDlepSPBvRCAj/n10gfjFIml8rVSUDz2ISKeDxmFuviLVSzJOCqxtXToeJpNJr9Pnij+LQ4A/cgXDyuATWyPkrJ1En1cvPk3sB8VfMLIvwO5CKu+uC1OFNLvvoe0h97ieKNjsUkc/zQ6V/0CAoboTZwdKY4AAAAASUVORK5CYII=);\n  opacity: 1;\n}\n.card-profile_user-infos[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: calc(68% - 100px);\n  color: #fff;\n  text-align: center;\n}\n.card-profile_user-infos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  background-color: #f96b4c;\n  background-image: linear-gradient(#f96b4c, #f23182);\n  display: block;\n  clear: both;\n  margin: auto;\n  border-radius: 100%;\n  top: calc(500% + 66px);\n  box-shadow: 0 2px 0 #d42d78, 0 3px 10px rgba(243, 49, 128, 0.15), 0 0px 10px rgba(243, 49, 128, 0.15), 0 0px 4px rgba(0, 0, 0, 0.35), 0 5px 20px rgba(243, 49, 128, 0.25), 0 15px 40px rgba(243, 49, 128, 0.75), inset 0 0 15px rgba(255, 255, 255, 0.05);\n  overflow: hidden;\n}\n.card-profile_user-infos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  font-style: normal;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: block;\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/64/icon-add-f.svg\");\n  background-repeat: no-repeat;\n  background-size: 30%;\n  background-position: center center;\n  left: 0;\n  top: 0;\n}\n.card-profile_user-infos[_ngcontent-%COMP%]   .infos_name[_ngcontent-%COMP%], .card-profile_user-infos[_ngcontent-%COMP%]   .infos_nick[_ngcontent-%COMP%] {\n  display: block;\n  clear: both;\n  padding: 0.5em 0;\n  padding-top: 0;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  font-size: 18px;\n  top: 8px;\n  font-weight: 800;\n}\n.card-profile_user-infos[_ngcontent-%COMP%]   .infos_nick[_ngcontent-%COMP%] {\n  top: 32px;\n  font-size: 14px;\n  font-weight: 300;\n}\n.card-profile_user-stats[_ngcontent-%COMP%] {\n  background: #fff;\n  float: left;\n  width: 100%;\n  height: calc(100% - 68%+2px);\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.card-profile_user-stats[_ngcontent-%COMP%]   .stats-holder[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 2.8em;\n  width: 100%;\n  display: flex;\n}\n.card-profile_user-stats[_ngcontent-%COMP%]   .user-stats[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.card-profile_user-stats[_ngcontent-%COMP%]   .user-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n  color: #b3b1b2;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.2px;\n}\n.card-profile_user-stats[_ngcontent-%COMP%]   .user-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #5e5e5e;\n  padding: 0.18em 0;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXRocmVlL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxwcm9maWxlXFxwcm9maWxlLXRocmVlXFxwcm9maWxlLXRocmVlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXRocmVlL3Byb2ZpbGUtdGhyZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxtRkFBQTtFQUNBLHlhQUFBO0VBSUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FEUUE7RUFDRSxlQUFBO0FDTkY7QURRQTtFQUNFLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ0xGO0FET0E7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNKRjtBRE1BO0VBQ0UsbUJBQUE7RUFDQSw4REFBQTtFQUNBLDhEQUFBO0FDSEY7QURLQTtFQUNFLGdCQUFBO0FDRkY7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDREY7QURHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUNBRjtBRENFO0VBQ0UsV0F6Q1k7RUEwQ1osZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlFQUFBO0FDQ0o7QURLSTtFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvRUFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUdBLFlBQUE7RUFDQSx1QkFBQTtBQ05OO0FEUUk7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDTk47QURRSTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1oQ0FBQTtFQUNBLFVBQUE7QUNOTjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUUseUJBQUE7RUFDQSxtREFBQTtFQUVGLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5UEFBQTtFQUdBLGdCQUFBO0FDVk47QURXTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUUsdUZBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7RUFFRixPQUFBO0VBQ0EsTUFBQTtBQ1hSO0FEY0k7O0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNaTjtBRGNJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1pOO0FEZUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBaEpXO0VBaUpYLCtCQW5KSztFQW9KTCxnQ0FwSks7QUN1SVQ7QURjSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1pOO0FEY0k7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUNaTjtBRGFNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ1hSO0FEYU07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNYUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS10aHJlZS9wcm9maWxlLXRocmVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWFOb3ZhLVJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzY0L1Byb3hpbWFOb3ZhLVJlZ3VsYXIuZW90XCIpO1xyXG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vNjQvUHJveGltYU5vdmEtUmVndWxhci5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxyXG4gICAgdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vNjQvUHJveGltYU5vdmEtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcbiAgICB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby82NC9Qcm94aW1hTm92YS1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcclxuICAgIHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzY0L1Byb3hpbWFOb3ZhLVJlZ3VsYXIuc3ZnI3JvY2tldGRlc2lnbi1mb250XCIpIGZvcm1hdChcInN2Z1wiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4kZ3JhZGllbnQ6ICNmOTZiNGMsICNmMjMxODI7XHJcbiRyYWRpdXM6IDEwcHg7XHJcbiR2aXN1YWwtaGVpZ2h0OiA2OCU7XHJcbiRkYXRhcy1oZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHZpc3VhbC1oZWlnaHR9KzJweCk7XHJcbjpyb290IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjZjBlZmVkO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlNWU0ZTUsICNjMmMxYzIpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWFOb3ZhLVJlZ3VsYXJcIiwgSGVsdmV0aWNhIG5ldWUsIHNhbnMtc2VyaWY7XHJcbn1cclxuI3Bvc3RzIHtcclxuICBtYXJnaW4tdG9wOiAyMHZoO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5jYXJkLXByb2ZpbGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYShibGFjaywgMC4xKTtcclxuICAmX3Zpc3VhbCB7XHJcbiAgICBoZWlnaHQ6ICR2aXN1YWwtaGVpZ2h0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gYm90dG9tLFxyXG4gICAgICBkYXJrZW4oIzU0NTU1OSwgMTAlKSxcclxuICAgICAgc2F0dXJhdGUoZGFya2VuKCMzYTRhN2IsIDIlKSwgMjAlKSxcclxuICAgICAgc2F0dXJhdGUoZGFya2VuKCMzYTRhN2IsIDE1JSksIDIwJSlcclxuICAgICk7XHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3lhbm5iZi9pbWcvYXZhdGFyL2Nvc2ltYS1hdmF0YXIuanBnXCIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgICAgXHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgbWl4LWJsZW5kLW1vZGU6IGxpZ2h0ZW47XHJcbiAgICB9XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIG1peC1ibGVuZC1tb2RlOiBsaWdodGVuO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3QkFNQUFBQ2xMT1MwQUFBQUVsQk1WRVVBQUFCVVVsUkVSa1JNU2t4TVRreEVRa1Q0OTBWT0FBQUFBWFJTVGxNQVFPYllaZ0FBQW94SlJFRlVPSTBkbEltUjVEQUlSUlhEYmdhQUV3Q2NBT0FFWkUvK3FjelRkRmYxSlFIL290ZDRTSldXZjUrbTdHalIyOFowVFpXMzhwTGpqMWFXSmw5ZVdhR2ZhQ3EveTR5MDEyaFBocXlTbm5iWGU3UTZ1bEs2blplVjVicGpoeW85eExqN2FwdkZTazN6U1hFbXRFWm1ObmdZYmhXaGttS25lN1hhbG5EclljWk1Od01sd3VRdWovZXpTMmRKbXBqRUZ3TGU3VDd6V0Uwem8yMmljcjRkTlpuZk9MVXA3MnJOY0E4dmN4M1k4cjNNWnBZT1BTQUM2bWZTR1JRQkQxc1p5RlBkOWIwbW9oTjcwQ1FUU2E2K0lrMTVSaWZVYUNqV3E2enAyLzlUNjk3ZTVWc1JLR1VsNEk0V25XcE94VkFJN0ZvTUVzcnAyZ0xVQ2dIOUo4NEI4bzFTZ3JiKzBhdUVkcnBvY0lRelU5NG1IQm1NdWxpSWxGZW10MHM4dzNtVWUwc3NMbmFlY2psbER1blRXMjBkMzNaeGtVT29TSUpicld4WmlIamRoVjE5MGU1QXpqd09ObjRBU3ZUQ0M1Q2NLZnl3dUZNQmUxUXBZakcweDM4bkpZQWNSMjZrNTRvOFlpWHFlQzdIY3RoNTRsZndTUGxIT0JmT0U5RjByR2d1SnNyMVYrR3JvYWZkRUMrM3FLMkhYOFFzZjBsV0V3WDBKMjlQa2gybG1GQjMzd0taQkI4UmxocGo1QVZCZDZtVE1ZQkM0Y1p6S05iNlN5Z0pKM2RuTklxa0hudXdWZ3Zhb0NGY29teUk2YytRRXZ4cTB0S0VpUUNlOVFvUzE4a2FLRk1sN3dxRXFKMkE2WGtRTWVqRTFkRWN1N0cvZzFKUm1ITU9rakdJdnFYSEVyYXlWZ2RKSUlKc0dCdzFMemFpamxGZEV4T0lJbktFT1ovb1JlQkNzRGxlcFNQQnZSQ0FqL24xMGdmakZJbWw4clZTVUR6MklTS2VEeG1GdXZpTFZTekpPQ3F4dFhUb2VKcE5KcjlQbmlqK0xRNEEvY2dYRHl1QVRXeVBrckoxRW4xY3ZQazNzQjhWZk1MSXZ3TzVDS3UrdUMxT0ZOTHZ2b2UwaDk3aWVLTmpzVWtjL3pRNlYvMENBb2JvVFp3ZEtZNEFBQUFBU1VWT1JLNUNZSUk9KTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgJl91c2VyLWluZm9zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IGNhbGMoI3skdmlzdWFsLWhlaWdodH0gLSAxMDBweCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGEge1xyXG4gICAgICB3aWR0aDogNjRweDtcclxuICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgY29sb3I6ICNmOTZiNGM7XHJcbiAgICAgICAgaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZ3JhZGllbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICB0b3A6IGNhbGMoNTAwJSArIDY2cHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAwICNkNDJkNzgsIDAgM3B4IDEwcHggcmdiYSgjZjMzMTgwLCAwLjE1KSwgMCAwcHggMTBweCByZ2JhKCNmMzMxODAsIDAuMTUpLFxyXG4gICAgICAgIDAgMHB4IDRweCByZ2JhKGRhcmtlbigjZjMzMTgwLCA4MCUpLCAwLjM1KSwgMCA1cHggMjBweCByZ2JhKCNmMzMxODAsIDAuMjUpLCAwIDE1cHggNDBweCByZ2JhKCNmMzMxODAsIDAuNzUpLFxyXG4gICAgICAgIGluc2V0IDAgMCAxNXB4IHJnYmEoI2ZmZmZmZiwgMC4wNSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgaW1hZ2U6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzY0L2ljb24tYWRkLWYuc3ZnXCIpO1xyXG4gICAgICAgICAgcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICBzaXplOiAzMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmZvc19uYW1lLFxyXG4gICAgLmluZm9zX25pY2sge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgICAuaW5mb3NfbmljayB7XHJcbiAgICAgIHRvcDogMzJweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX3VzZXItc3RhdHMge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6ICRkYXRhcy1oZWlnaHQ7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgICAuc3RhdHMtaG9sZGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyLjhlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAudXNlci1zdGF0cyB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogI2IzYjFiMjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBjb2xvcjogIzVlNWU1ZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjE4ZW0gMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWFOb3ZhLVJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby82NC9Qcm94aW1hTm92YS1SZWd1bGFyLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby82NC9Qcm94aW1hTm92YS1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzY0L1Byb3hpbWFOb3ZhLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby82NC9Qcm94aW1hTm92YS1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vNjQvUHJveGltYU5vdmEtUmVndWxhci5zdmcjcm9ja2V0ZGVzaWduLWZvbnRcIikgZm9ybWF0KFwic3ZnXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZjBlZmVkO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZTVlNGU1LCAjYzJjMWMyKTtcbiAgZm9udC1mYW1pbHk6IFwiUHJveGltYU5vdmEtUmVndWxhclwiLCBIZWx2ZXRpY2EgbmV1ZSwgc2Fucy1zZXJpZjtcbn1cblxuI3Bvc3RzIHtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1wcm9maWxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uY2FyZC1wcm9maWxlX3Zpc3VhbCB7XG4gIGhlaWdodDogNjglO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzYjNjM2YsICMyNjNkODUsICMxNzI1NTEpO1xufVxuLmNhcmQtcHJvZmlsZV92aXN1YWw6YmVmb3JlLCAuY2FyZC1wcm9maWxlX3Zpc3VhbDphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMveWFubmJmL2ltZy9hdmF0YXIvY29zaW1hLWF2YXRhci5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWl4LWJsZW5kLW1vZGU6IGxpZ2h0ZW47XG59XG4uY2FyZC1wcm9maWxlX3Zpc3VhbDpiZWZvcmUge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cbi5jYXJkLXByb2ZpbGVfdmlzdWFsOmFmdGVyIHtcbiAgei1pbmRleDogMjtcbiAgbWl4LWJsZW5kLW1vZGU6IGxpZ2h0ZW47XG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdCQU1BQUFDbExPUzBBQUFBRWxCTVZFVUFBQUJVVWxSRVJrUk1Ta3hNVGt4RVFrVDQ5MFZPQUFBQUFYUlNUbE1BUU9iWVpnQUFBb3hKUkVGVU9JMGRsSW1SNURBSVJSWERiZ2FBRXdDY0FPQUVaRS8rcWN6VGRGZjFKUUgvb3RkNFNKV1dmNSttN0dqUjI4WjBUWlczOHBMamoxYVdKbDllV2FHZmFDcS95NHkwMTJoUGhxeVNubmJYZTdRNnVsSzZuWmVWNWJwamh5bzl4TGo3YXB2RlNrM3pTWEVtdEVabU5uZ1liaFdoa21LbmU3WGFsbkRyWWNaTU53TWx3dVF1ai9lelMyZEptcGpFRndMZTdUN3pXRTB6bzIyaWNyNGROWm5mT0xVcDcyck5jQTh2Y3gzWThyM01acFlPUFNBQzZtZlNHUlFCRDFzWnlGUGQ5YjBtb2hONzBDUVRTYTYrSWsxNVJpZlVhQ2pXcTZ6cDIvOVQ2OTdlNVZzUktHVWw0STRXbldwT3hWQUk3Rm9NRXNycDJnTFVDZ0g5Sjg0QjhvMVNncmIrMGF1RWRycG9jSVF6VTk0bUhCbU11bGlJbEZlbXQwczh3M21VZTBzc0xuYWVjamxsRHVuVFcyMGQzM1p4a1VPb1NJSmJyV3haaUhqZGhWMTkwZTVBemp3T05uNEFTdlRDQzVDY0tmeXd1Rk1CZTFRcFlqRzB4MzhuSllBY1IyNms1NG84WWlYcWVDN0hjdGg1NGxmd1NQbEhPQmZPRTlGMHJHZ3VKc3IxVitHcm9hZmRFQyszcUsySFg4UXNmMGxXRXdYMEoyOVBraDJsbUZCMzN3S1pCQjhSbGhwajVBVkJkNm1UTVlCQzRjWnpLTmI2U3lnSkozZG5OSXFrSG51d1ZndmFvQ0Zjb215STZjK1FFdnhxMHRLRWlRQ2U5UW9TMThrYUtGTWw3d3FFcUoyQTZYa1FNZWpFMWRFY3U3Ry9nMUpSbUhNT2tqR0l2cVhIRXJheVZnZEpJSUpzR0J3MUx6YWlqbEZkRXhPSUluS0VPWi9vUmVCQ3NEbGVwU1BCdlJDQWovbjEwZ2ZqRkltbDhyVlNVRHoySVNLZUR4bUZ1dmlMVlN6Sk9DcXh0WFRvZUpwTkpyOVBuaWorTFE0QS9jZ1hEeXVBVFd5UGtySjFFbjFjdlBrM3NCOFZmTUxJdndPNUNLdSt1QzFPRk5MdnZvZTBoOTdpZUtOanNVa2MvelE2Vi8wQ0FvYm9UWndkS1k0QUFBQUFTVVZPUks1Q1lJST0pO1xuICBvcGFjaXR5OiAxO1xufVxuLmNhcmQtcHJvZmlsZV91c2VyLWluZm9zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IGNhbGMoNjglIC0gMTAwcHgpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtcHJvZmlsZV91c2VyLWluZm9zIGEge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk2YjRjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2Y5NmI0YywgI2YyMzE4Mik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0b3A6IGNhbGMoNTAwJSArIDY2cHgpO1xuICBib3gtc2hhZG93OiAwIDJweCAwICNkNDJkNzgsIDAgM3B4IDEwcHggcmdiYSgyNDMsIDQ5LCAxMjgsIDAuMTUpLCAwIDBweCAxMHB4IHJnYmEoMjQzLCA0OSwgMTI4LCAwLjE1KSwgMCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zNSksIDAgNXB4IDIwcHggcmdiYSgyNDMsIDQ5LCAxMjgsIDAuMjUpLCAwIDE1cHggNDBweCByZ2JhKDI0MywgNDksIDEyOCwgMC43NSksIGluc2V0IDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1wcm9maWxlX3VzZXItaW5mb3MgYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vNjQvaWNvbi1hZGQtZi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG4uY2FyZC1wcm9maWxlX3VzZXItaW5mb3MgLmluZm9zX25hbWUsXG4uY2FyZC1wcm9maWxlX3VzZXItaW5mb3MgLmluZm9zX25pY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIHBhZGRpbmc6IDAuNWVtIDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdG9wOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uY2FyZC1wcm9maWxlX3VzZXItaW5mb3MgLmluZm9zX25pY2sge1xuICB0b3A6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5jYXJkLXByb2ZpbGVfdXNlci1zdGF0cyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OCUrMnB4KTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4uY2FyZC1wcm9maWxlX3VzZXItc3RhdHMgLnN0YXRzLWhvbGRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMi44ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNhcmQtcHJvZmlsZV91c2VyLXN0YXRzIC51c2VyLXN0YXRzIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtcHJvZmlsZV91c2VyLXN0YXRzIC51c2VyLXN0YXRzIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2IzYjFiMjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xufVxuLmNhcmQtcHJvZmlsZV91c2VyLXN0YXRzIC51c2VyLXN0YXRzIHNwYW4ge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjNWU1ZTVlO1xuICBwYWRkaW5nOiAwLjE4ZW0gMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileThreePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-three',
          templateUrl: './profile-three.page.html',
          styleUrls: ['./profile-three.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-two/profile-two.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-two/profile-two.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProfileTwoPageModule */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileTwoProfileTwoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileTwoPageModule", function () {
      return ProfileTwoPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_two_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-two.page */
    "./src/app/pages/yannbf/components/profile/profile-two/profile-two.page.ts");

    var ProfileTwoPageModule = function ProfileTwoPageModule() {
      _classCallCheck(this, ProfileTwoPageModule);
    };

    ProfileTwoPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileTwoPageModule
    });
    ProfileTwoPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileTwoPageModule_Factory(t) {
        return new (t || ProfileTwoPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileTwoPageModule, {
        declarations: [_profile_two_page__WEBPACK_IMPORTED_MODULE_4__["ProfileTwoPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileTwoPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_profile_two_page__WEBPACK_IMPORTED_MODULE_4__["ProfileTwoPage"]],
          entryComponents: [_profile_two_page__WEBPACK_IMPORTED_MODULE_4__["ProfileTwoPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile-two/profile-two.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile-two/profile-two.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: ProfileTwoPage */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileTwoProfileTwoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileTwoPage", function () {
      return ProfileTwoPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ProfileTwoPage = /*#__PURE__*/function () {
      function ProfileTwoPage(modalCtrl) {
        _classCallCheck(this, ProfileTwoPage);

        this.modalCtrl = modalCtrl;
      }

      _createClass(ProfileTwoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }]);

      return ProfileTwoPage;
    }();

    ProfileTwoPage.ɵfac = function ProfileTwoPage_Factory(t) {
      return new (t || ProfileTwoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
    };

    ProfileTwoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileTwoPage,
      selectors: [["app-profile-two"]],
      decls: 27,
      vars: 0,
      consts: [["slot", "start"], ["fill", "clear", 3, "click"], ["name", "arrow-back", "slot", "icon-only"], [1, "container"], [1, "header"], ["src", "https://avatars1.githubusercontent.com/u/12532889?s=460&v=4", 1, "profile"], [1, "content"], [1, "social"], ["href", "#", 1, "zocial-facebook"], ["href", "#", 1, "zocial-twitter"], ["href", "#", 1, "zocial-instagram"]],
      template: function ProfileTwoPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileTwoPage_Template_ion_button_click_3_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vagner Sabadi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mobile Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "about me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hey - I am Vagner, a 26 years old mobile developer dev from brazil. Feel free to follow me. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]],
      styles: ["@import url(http://weloveiconfonts.com/api/?family=zocial);\n\n[class*=zocial-][_ngcontent-%COMP%]:before {\n  font-family: \"zocial\", sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  --background: #f0f0f0;\n}\n.container[_ngcontent-%COMP%]:hover   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 30px 0 30px;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  color: #505064;\n}\n.profile[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  margin: 20px 0 -70px 0;\n  border: 3px solid #f37346;\n  transition: all 1.5s ease;\n}\n.profile[_ngcontent-%COMP%]:hover {\n  border: 3px solid red;\n}\n.content[_ngcontent-%COMP%] {\n  background: #f37346;\n  color: #f0f0f0;\n  padding: 75px 0 0 0;\n  text-align: center;\n  height: auto;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  font-weight: 300;\n}\n.social[_ngcontent-%COMP%] {\n  padding: 40px 0 0 0;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  width: 100%;\n  height: 50px;\n  overflow: hidden;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 50px 0 0 0;\n  float: left;\n  width: 33.3333%;\n  height: 100%;\n  line-height: 50px;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  transition: 0.3s;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transition: 0.6s;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transition: 0.9s;\n}\n.social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n.zocial-facebook[_ngcontent-%COMP%] {\n  background: #3B5998;\n  display: block;\n}\n.zocial-twitter[_ngcontent-%COMP%] {\n  background: #55ACEE;\n  display: block;\n}\n.zocial-instagram[_ngcontent-%COMP%] {\n  background: #3F729B;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXR3by9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xccHJvZmlsZVxccHJvZmlsZS10d29cXHByb2ZpbGUtdHdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXR3by9wcm9maWxlLXR3by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVksMERBQUE7QUFDUixXQUFBO0FBQ0E7RUFDRSxpQ0FBQTtBQ0NOO0FEQ0k7RUFDRSxxQkFBQTtBQ0VOO0FEQVE7RUFDRSxTQUFBO0FDRVY7QURFSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNDTjtBREFNOztFQUVFLGdCQUFBO0FDRVI7QURBTTtFQUNFLFNBQUE7QUNFUjtBREFNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDRVI7QURDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNFTjtBRERNO0VBQ0UscUJBQUE7QUNHUjtBREFJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHTjtBREZNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0lSO0FEREk7RUFDRSxtQkFBQTtBQ0lOO0FESE07RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNLUjtBREpRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ01WO0FESlk7RUFDRSxnQkFBQTtBQ01kO0FEUFk7RUFDRSxnQkFBQTtBQ1NkO0FEVlk7RUFDRSxnQkFBQTtBQ1lkO0FEUlE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNVVjtBRE5JO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDU047QURQSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ1VOO0FEUkk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNXTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS10d28vcHJvZmlsZS10d28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIEBpbXBvcnQgdXJsKGh0dHA6Ly93ZWxvdmVpY29uZm9udHMuY29tL2FwaS8/ZmFtaWx5PXpvY2lhbCk7XHJcbiAgICAvKiB6b2NpYWwgKi9cclxuICAgIFtjbGFzcyo9XCJ6b2NpYWwtXCJdOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnem9jaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5zb2NpYWwgbGkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNDBweCAzMHB4IDAgMzBweDtcclxuICAgICAgaDEsXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICB9XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDE1cHggMDtcclxuICAgICAgICBjb2xvcjogIzUwNTA2NDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luOiAyMHB4IDAgLTcwcHggMDtcclxuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YzNzM0NjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDEuNXMgZWFzZTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMzczNDY7XHJcbiAgICAgIGNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICBwYWRkaW5nOiA3NXB4IDAgMCAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWwge1xyXG4gICAgICBwYWRkaW5nOiA0MHB4IDAgMCAwO1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbjogNTBweCAwIDAgMDtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDMge1xyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICgkaSAqIC4zcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC56b2NpYWwtZmFjZWJvb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC56b2NpYWwtdHdpdHRlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1NUFDRUU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnpvY2lhbC1pbnN0YWdyYW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjM0Y3MjlCO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgICIsIkBpbXBvcnQgdXJsKGh0dHA6Ly93ZWxvdmVpY29uZm9udHMuY29tL2FwaS8/ZmFtaWx5PXpvY2lhbCk7XG4vKiB6b2NpYWwgKi9cbltjbGFzcyo9em9jaWFsLV06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiem9jaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICAtLWJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG4uY29udGFpbmVyOmhvdmVyIC5zb2NpYWwgbGkge1xuICBtYXJnaW46IDA7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggMzBweCAwIDMwcHg7XG59XG4uaGVhZGVyIGgxLFxuLmhlYWRlciBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uaGVhZGVyIGgxIHtcbiAgbWFyZ2luOiAwO1xufVxuLmhlYWRlciBoMiB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgY29sb3I6ICM1MDUwNjQ7XG59XG5cbi5wcm9maWxlIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMjBweCAwIC03MHB4IDA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMzczNDY7XG4gIHRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2U7XG59XG4ucHJvZmlsZTpob3ZlciB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbn1cblxuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZjM3MzQ2O1xuICBjb2xvcjogI2YwZjBmMDtcbiAgcGFkZGluZzogNzVweCAwIDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY29udGVudCBwIHtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uc29jaWFsIHtcbiAgcGFkZGluZzogNDBweCAwIDAgMDtcbn1cbi5zb2NpYWwgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc29jaWFsIHVsIGxpIHtcbiAgbWFyZ2luOiA1MHB4IDAgMCAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMzLjMzMzMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuLnNvY2lhbCB1bCBsaTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnNvY2lhbCB1bCBsaTpudGgtY2hpbGQoMikge1xuICB0cmFuc2l0aW9uOiAwLjZzO1xufVxuLnNvY2lhbCB1bCBsaTpudGgtY2hpbGQoMykge1xuICB0cmFuc2l0aW9uOiAwLjlzO1xufVxuLnNvY2lhbCB1bCBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnpvY2lhbC1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uem9jaWFsLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnpvY2lhbC1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiAjM0Y3MjlCO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileTwoPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-two',
          templateUrl: './profile-two.page.html',
          styleUrls: ['./profile-two.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesYannbfComponentsProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
    });
    /* harmony import */


    var _profile_two_profile_two_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profile-two/profile-two.module */
    "./src/app/pages/yannbf/components/profile/profile-two/profile-two.module.ts");
    /* harmony import */


    var _profile_three_profile_three_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile-three/profile-three.module */
    "./src/app/pages/yannbf/components/profile/profile-three/profile-three.module.ts");
    /* harmony import */


    var _profile_settings_profile_settings_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile-settings/profile-settings.module */
    "./src/app/pages/yannbf/components/profile/profile-settings/profile-settings.module.ts");
    /* harmony import */


    var _profile_four_profile_four_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-four/profile-four.module */
    "./src/app/pages/yannbf/components/profile/profile-four/profile-four.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/yannbf/components/profile/profile.page.ts");
    /* harmony import */


    var _profile_one_profile_one_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./profile-one/profile-one.module */
    "./src/app/pages/yannbf/components/profile/profile-one/profile-one.module.ts");
    /* harmony import */


    var _profile_five_profile_five_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./profile-five/profile-five.module */
    "./src/app/pages/yannbf/components/profile/profile-five/profile-five.module.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_9__["ProfilePage"]
    }];

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ProfilePageModule
    });
    ProfilePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function ProfilePageModule_Factory(t) {
        return new (t || ProfilePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes), _profile_one_profile_one_module__WEBPACK_IMPORTED_MODULE_10__["ProfileOnePageModule"], _profile_five_profile_five_module__WEBPACK_IMPORTED_MODULE_11__["ProfileFivePageModule"], _profile_four_profile_four_module__WEBPACK_IMPORTED_MODULE_3__["ProfileFourPageModule"], _profile_settings_profile_settings_module__WEBPACK_IMPORTED_MODULE_2__["ProfileSettingsPageModule"], _profile_three_profile_three_module__WEBPACK_IMPORTED_MODULE_1__["ProfileThreePageModule"], _profile_two_profile_two_module__WEBPACK_IMPORTED_MODULE_0__["ProfileTwoPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProfilePageModule, {
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_9__["ProfilePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _profile_one_profile_one_module__WEBPACK_IMPORTED_MODULE_10__["ProfileOnePageModule"], _profile_five_profile_five_module__WEBPACK_IMPORTED_MODULE_11__["ProfileFivePageModule"], _profile_four_profile_four_module__WEBPACK_IMPORTED_MODULE_3__["ProfileFourPageModule"], _profile_settings_profile_settings_module__WEBPACK_IMPORTED_MODULE_2__["ProfileSettingsPageModule"], _profile_three_profile_three_module__WEBPACK_IMPORTED_MODULE_1__["ProfileThreePageModule"], _profile_two_profile_two_module__WEBPACK_IMPORTED_MODULE_0__["ProfileTwoPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ProfilePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes), _profile_one_profile_one_module__WEBPACK_IMPORTED_MODULE_10__["ProfileOnePageModule"], _profile_five_profile_five_module__WEBPACK_IMPORTED_MODULE_11__["ProfileFivePageModule"], _profile_four_profile_four_module__WEBPACK_IMPORTED_MODULE_3__["ProfileFourPageModule"], _profile_settings_profile_settings_module__WEBPACK_IMPORTED_MODULE_2__["ProfileSettingsPageModule"], _profile_three_profile_three_module__WEBPACK_IMPORTED_MODULE_1__["ProfileThreePageModule"], _profile_two_profile_two_module__WEBPACK_IMPORTED_MODULE_0__["ProfileTwoPageModule"]],
          declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_9__["ProfilePage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/profile/profile.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/yannbf/components/profile/profile.page.ts ***!
    \*****************************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesYannbfComponentsProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _profile_two_profile_two_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile-two/profile-two.page */
    "./src/app/pages/yannbf/components/profile/profile-two/profile-two.page.ts");
    /* harmony import */


    var _profile_one_profile_one_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-one/profile-one.page */
    "./src/app/pages/yannbf/components/profile/profile-one/profile-one.page.ts");
    /* harmony import */


    var _profile_three_profile_three_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-three/profile-three.page */
    "./src/app/pages/yannbf/components/profile/profile-three/profile-three.page.ts");
    /* harmony import */


    var _profile_four_profile_four_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-four/profile-four.page */
    "./src/app/pages/yannbf/components/profile/profile-four/profile-four.page.ts");
    /* harmony import */


    var _profile_five_profile_five_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-five/profile-five.page */
    "./src/app/pages/yannbf/components/profile/profile-five/profile-five.page.ts");
    /* harmony import */


    var _profile_settings_profile_settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile-settings/profile-settings.page */
    "./src/app/pages/yannbf/components/profile/profile-settings/profile-settings.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfilePage_ion_item_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePage_ion_item_8_Template_ion_item_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102);

          var item_r100 = ctx.$implicit;

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r101.itemTapped($event, item_r100);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r100 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r100.title, " ");
      }
    }

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(modalCtrl) {
        _classCallCheck(this, ProfilePage);

        this.modalCtrl = modalCtrl;
        this.items = [{
          title: 'Type One',
          page: _profile_one_profile_one_page__WEBPACK_IMPORTED_MODULE_3__["ProfileOnePage"]
        }, {
          title: 'Type Two',
          page: _profile_two_profile_two_page__WEBPACK_IMPORTED_MODULE_2__["ProfileTwoPage"]
        }, {
          title: 'Type Three',
          page: _profile_three_profile_three_page__WEBPACK_IMPORTED_MODULE_4__["ProfileThreePage"]
        }, {
          title: 'Type Four',
          page: _profile_four_profile_four_page__WEBPACK_IMPORTED_MODULE_5__["ProfileFourPage"]
        }, {
          title: 'Type Five',
          page: _profile_five_profile_five_page__WEBPACK_IMPORTED_MODULE_6__["ProfileFivePage"]
        }, {
          title: 'Profile Settings',
          page: _profile_settings_profile_settings_page__WEBPACK_IMPORTED_MODULE_7__["ProfileSettingsPage"]
        }];
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "itemTapped",
        value: function itemTapped(event, item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: item.page
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ɵfac = function ProfilePage_Factory(t) {
      return new (t || ProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]));
    };

    ProfilePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfilePage,
      selectors: [["app-profile"]],
      decls: 9,
      vars: 1,
      consts: [["slot", "start"], ["defaultHref", "/"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
      template: function ProfilePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Profiles");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProfilePage_ion_item_8_Template, 2, 1, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonItem"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfilePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.page.html',
          styleUrls: ['./profile.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-profile-profile-module-es5.js.map