import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
  url: '../Images/1.png',
  caption: `This image demonstrates the User Interface for the software.
  In this picture we can see the plotted graph for multiple files in one 
  place which can be used by Doctors in Hospitals to analyse a patient in ICU. 
  This UI has been made on Python library PyQt_5 which recursively updates after 
  a short period to show the latest condition of the patient.`
  },
  {
  url: '../Images/2.png',
  caption: `This is the visualization of an HR (Heart-Rate) file which 
  shows how a patient's heart is working.`
  },
  {
  url: '../Images/3.png',
  caption: `This is the visualization of NIRS-right and NIRS-left
  file which compares both sides of brain oxygen level.`
  },
  {
  url: '../Images/4.png',
  caption: `In this method we iterate over all the index files to extract the time vectors from the files.
  Secondly, we extract the binary for each file into an array of type uint8.
  Then we divide the large array into several arrays of size 28 and add all the arrays into a python dictionary.
  Thirdly we convert the offset into a single integer and all the lists into NumPy arrays.
  Fourthly we select the 8 to 16 bytes related to the time vector, flip the list and convert it to hexadecimal.
  Then, we extract the time from the start date from the hexadecimal values. Lastly, insert the missing
  values to the time vector by determining the missing indexes and adding 1,024 to the previous index value.`
  },
  {
  url: '../Images/5.png',
  caption: `In this method we are extracting the data_qual_str using the NumericQuality data
   index file. The extraction is done by comparing the data with the correct 
   assigned labels.Methods use np.fromfile function from the python library 
   Numpy to extract binary files into the data type integer 4 and convert it 
   into Numpy array using the np.array function. Then method checks the bytes 
   integers and assigns the correct data_qual_str label defined in the data_qual_str
   list.`
  },
  {
  url: '../Images/6.png',
  caption: `In this folder extraction method, Firstly it fetches the file from the given path using the os.path() function.
  Then the method iterates over all the files from the given data directory and checks the filename using os.fsdecode() and endswith().
  Based on the filenames method separate the necessary files into their associated list which are declared on line 14.
  This method allows us to iterate over the file for a certain type in binary extraction.`
    },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img alt="" src={fadeImage.url} className="big-img"/>
            </div>
            <h2 className='desc'>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow