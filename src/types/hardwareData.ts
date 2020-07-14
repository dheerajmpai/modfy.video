type HardwareDataType = {
  inputFileSize: string;
  encodeTime: number;
  threads: number;
  inputFileFormat: string;
  outputFileFormat: string;
  outputFileCodec: string;
  browser: string;
  os: string;
  navigator: string;
  tester?: string;
};

type FileDataType = {
  size: number;
  ext: string;
};

export { HardwareDataType, FileDataType };
