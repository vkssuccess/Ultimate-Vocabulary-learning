(function (global) {
  "use strict";

  function count(value) {
    var number = Number(value);
    return Number.isFinite(number) ? Math.max(0, Math.trunc(number)) : 0;
  }

  function netScore(correct, answered) {
    var total = count(answered);
    var right = Math.min(total, count(correct));
    return right - (total - right);
  }

  function accuracy(correct, answered) {
    var total = count(answered);
    return total ? Math.round((Math.min(total, count(correct)) / total) * 100) : 0;
  }

  function progressPercent(score, maximum) {
    var max = count(maximum);
    if (!max) return 0;
    return Math.max(0, Math.min(100, Math.round((Number(score) / max) * 100)));
  }

  global.WordVaultScoring = Object.freeze({ netScore, accuracy, progressPercent });
})(window);
