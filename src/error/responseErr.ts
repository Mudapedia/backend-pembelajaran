class ResponseErr extends Error {
  private status: number;

  constructor(status: number, msg: string) {
    super(msg);
    this.status = status;
  }

  get getStatus() {
    return this.status;
  }
}

export default ResponseErr;
