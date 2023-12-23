/*
    The Promise object represents the eventual completion (or failure) 
    of an asynchronous operation and its resulting value.

- Essentially, a promise is a returned object to which you attach callbacks.
  , instead of passing callbacks into a function. 
*/

// Imagine a function, createAudioFileAsync(), which asynchronously generates
//  a sound file given a configuration record and two callback functions:
//   one called if the audio file is successfully created,
//   and the other called if an error occurs.

function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

// If createAudioFileAsync() were rewritten to return a promise,
// you would attach your callbacks to it instead:

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
