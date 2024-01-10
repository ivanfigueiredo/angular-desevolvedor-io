export abstract class BaseDomain {
  private id: string;

  protected constructor() {
    this.id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
  }

  public get ID(): string {
    return this.id;
  }
}
