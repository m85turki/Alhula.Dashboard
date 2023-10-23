/**
 * Perfect Scrollbar
 */
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  (function () {
    const verticalExamples = document.querySelectorAll('.vertical-example'),
      horizontalExamples = document.querySelectorAll('.horizontal-example'),
      horizVertExamples = document.querySelectorAll('.both-scrollbars-example');

    // Vertical Examples
    // --------------------------------------------------------------------
    if (verticalExamples.length > 0) {
      verticalExamples.forEach((element) => {
        new PerfectScrollbar(element, {
          wheelPropagation: false
        });
      });
    }

    // Horizontal Examples
    // --------------------------------------------------------------------
    if (horizontalExamples.length > 0) {
      horizontalExamples.forEach((element) => {
        new PerfectScrollbar(element, {
          wheelPropagation: false,
          suppressScrollY: true
        });
      });
    }

    // Both vertical and Horizontal Examples
    // --------------------------------------------------------------------
    if (horizVertExamples.length > 0) {
      horizVertExamples.forEach((element) => {
        new PerfectScrollbar(element, {
          wheelPropagation: false
        });
      });
    }
  })();
});
