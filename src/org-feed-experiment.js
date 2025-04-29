// DEFINE GLOBAL VARIABLES
let timeline = [];

// jsPsych Initialization
const jsPsych = initJsPsych({
  use_webaudio: false,
  display_element: 'jspsych-target',
  show_progress_bar: false,
  default_iti: 0,
  on_finish: function (data) {
    jsPsych.data.displayData('csv');
  }
});

// FACEBOOK FEED //
function facebookFeedTask() {
  return {
    type: jsPsychOrgFacebookFeed,
  };
};

timeline.push(facebookFeedTask());

startExperiment();

function startExperiment() {
  jsPsych.run(timeline);
};