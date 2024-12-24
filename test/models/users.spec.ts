import { find, propEq } from "ramda";

describe("Users Endpoint", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should find the target", () => {
    const target = 2;

    const connections = [
      { id: 0, x: 0, y: 7 },
      { id: 1, x: 1, y: 4 },
      { id: 2, x: 2, y: 7 },
      { id: 3, x: 3, y: 7 },
      { id: 4, x: 4, y: 0 },
      { id: 7, x: 7, y: 9 },
      { id: 8, x: 8, y: 7 },
    ];

    let found = find(propEq(target, "x"))(connections);
    expect(found).toBe(connections[2]);
  });
});
