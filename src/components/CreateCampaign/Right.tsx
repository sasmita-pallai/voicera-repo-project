import Container from './Container';
import UploadCard, { UploadCardVariant } from '../Dropbox/UploadCard';
import { Schedule } from './Schedule';
import UserDropdown from './userDropdown';
import type { TimeSensitivity } from '../../api/campaign';

interface RightProps {
  setCalling: (file: File | null) => void;
  assignTo: string;
  setAssignTo: (value: string) => void;
  timeSensitivity: TimeSensitivity;
  setTimeSensitivity: (value: TimeSensitivity) => void;
  postmanCollection: string;
  setPostmanCollection: (value: string) => void;
  calling: File | null; 
  callingRef?: React.RefObject<HTMLInputElement | null>; 
}

const Right = ({
  setCalling,
  assignTo,
  calling,
  setAssignTo,
  timeSensitivity,
  setTimeSensitivity,
  callingRef,
  setPostmanCollection,
  
}: RightProps) => {
  return (
    <div className="flex flex-col w-full gap-2 p-2">
      <Container title="Upload Your File" titledesc="(Calling sheet)">
        <UploadCard
          variant={UploadCardVariant.Media}
          mediaType='callingSheet'
          className="h-30 w-full rounded-[4px]"
          onFileSelect={setCalling}
          file={calling}
          inputRef={callingRef}
        />
      </Container>
      
      <Container title="Postman Collection">
       
        <UploadCard variant={UploadCardVariant.Postman} postmancardType='postman_collection' buttonLabel="Upload Media"  className="h-30 w-full rounded-[4px]"
          onLinkSubmit={(url: string) => setPostmanCollection(url)} />

      </Container>
      

      <Container title="Time Sensitivity">
        <Schedule
          timeSensitivity={timeSensitivity}
          setTimeSensitivity={setTimeSensitivity}
        />
      </Container>

      <Container title="Assign To">
  <UserDropdown assignTo={assignTo} setAssignTo={setAssignTo} />
</Container>

    </div>
  );
};

export default Right;
