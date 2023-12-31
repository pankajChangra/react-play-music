import * as React from 'react';
import { Box, Input, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
// import beatGif from "../styles/Images/beatGif.gif";

const numbers: number[] = [0,1,2,3];

const Audioupload = () => {
    const [getAudio, setAudio] = React.useState(null);

    const onDrop = (acceptFile: any) => {
        setAudio(acceptFile[0]);
    };

    const { getRootProps, getInputProps} = useDropzone({
        accept: {
            'audio/*': ['.mp3', '.wav', '.m4a', '.mp4'] 
        },
        onDrop,
    });

    return (
        <React.Fragment>
            <div className='dropzone-file' {...getRootProps()} >
                <Input {...getInputProps} />
                <Box mb={2}>
                    <Typography>
                        Drag and drop an music files here, or click to select one
                    </Typography>
                    {getAudio && (
                        <React.Fragment>
                            <audio controls autoPlay>
                                <source src={URL.createObjectURL(getAudio)} type="audio/mpeg" /> 
                                Your browser does not support the audio element.
                            </audio>
                            {/* <img className="beat-gif" src={beatGif} alt="music gif" /> */}
                            <div className="beat-lines" >
                                <div className="beat-loader beat-outer-card">
                                    {numbers.map((num) => (
                                        <div key={num} className="beat-inner-card" style={{ "--i": num } as React.CSSProperties}></div>
                                    ))}
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </Box>        
            </div>
        </React.Fragment>
    )
}

export default Audioupload;
