/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const Project = () => {
    const tasks = [];

    const addTask = task => {
        tasks.push(task);
    };

    const removeTask = task => {
        if (tasks.includes(task)) {
            tasks.splice(tasks.indexOf(task), 1);
        };
    };
}

const Task = (title="My Task", description=""/* , dueDate */, priority="low") => {
    
    const setTitle = inputTitle => title = inputTitle;
    const setDescription = inputDescription => description = inputDescription;
    //const setDueDate = inputDueDate => dueDate = inputDueDate;
    const setPriority = inputPriority => priority = inputPriority;


    const getTitle = () => title;
    const getDescription = () => description;
    //const getDueDate = () => dueDate;
    const getPriority = () => priority;

    return {
        setTitle,
        setDescription,
        //setDueDate,
        setPriority,

        getTitle,
        getDescription,
        //getDueDate,
        getPriority,
    };
};

const lolThisTask = Task();
const lolThatTask = Task("loltask", "loldesc");

console.log(lolThisTask.getTitle());
console.log(lolThatTask.getDescription());
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gW107XG5cbiAgICBjb25zdCBhZGRUYXNrID0gdGFzayA9PiB7XG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSB0YXNrID0+IHtcbiAgICAgICAgaWYgKHRhc2tzLmluY2x1ZGVzKHRhc2spKSB7XG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuY29uc3QgVGFzayA9ICh0aXRsZT1cIk15IFRhc2tcIiwgZGVzY3JpcHRpb249XCJcIi8qICwgZHVlRGF0ZSAqLywgcHJpb3JpdHk9XCJsb3dcIikgPT4ge1xuICAgIFxuICAgIGNvbnN0IHNldFRpdGxlID0gaW5wdXRUaXRsZSA9PiB0aXRsZSA9IGlucHV0VGl0bGU7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uID0+IGRlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbjtcbiAgICAvL2NvbnN0IHNldER1ZURhdGUgPSBpbnB1dER1ZURhdGUgPT4gZHVlRGF0ZSA9IGlucHV0RHVlRGF0ZTtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IGlucHV0UHJpb3JpdHkgPT4gcHJpb3JpdHkgPSBpbnB1dFByaW9yaXR5O1xuXG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gICAgLy9jb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuICAgICAgICAvL3NldER1ZURhdGUsXG4gICAgICAgIHNldFByaW9yaXR5LFxuXG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgLy9nZXREdWVEYXRlLFxuICAgICAgICBnZXRQcmlvcml0eSxcbiAgICB9O1xufTtcblxuY29uc3QgbG9sVGhpc1Rhc2sgPSBUYXNrKCk7XG5jb25zdCBsb2xUaGF0VGFzayA9IFRhc2soXCJsb2x0YXNrXCIsIFwibG9sZGVzY1wiKTtcblxuY29uc29sZS5sb2cobG9sVGhpc1Rhc2suZ2V0VGl0bGUoKSk7XG5jb25zb2xlLmxvZyhsb2xUaGF0VGFzay5nZXREZXNjcmlwdGlvbigpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=