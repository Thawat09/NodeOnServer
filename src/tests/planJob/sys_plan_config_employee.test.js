const {getEmp} = require('../../controllers/planJob/planJob.contoller');

describe('getEmp function', () => {
  const req = {};
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };

  const postgresDB = {authenticate: jest.fn()};
  const SysPlanConfigEmployee = {findAll: jest.fn()};

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return employees data', async () => {
    req.query = {
      page: 1,
      pageSize: 4,
      orderBy: 'emp_id',
      type_job: 'Hardware',
    };

    const fakeResult = [
      {
        emp_id: 'DTC005',
        emp_name: 'สวัสดิ์ เรือนนา',
        emp_display: 'TS DTC005 สวัสดิ์ เรือนนา (หวัด)',
      },
      {
        emp_id: 'DTC006',
        emp_name: 'แสงดาว ราษฏร์อุดม',
        emp_display: 'TS DTC006 แสงดาว ราษฏร์อุดม (แสงดาว)',
      },
      {
        emp_id: 'DTC01013',
        emp_name: 'อนุชา เทียมเมฆ',
        emp_display: 'TS DTC01013 อนุชา เทียมเมฆ (บิว)',
      },
      {
        emp_id: 'DTC01058',
        emp_name: 'ปกป้อง ภู่ศิลป์',
        emp_display: 'TS DTC01058 ปกป้อง ภู่ศิลป์ (ป้อง)',
      },
    ];

    const countResult = fakeResult.length;
    const pageSize = req.query.pageSize;
    const page = req.query.page;

    postgresDB.authenticate.mockResolvedValueOnce();
    SysPlanConfigEmployee.findAll.mockResolvedValueOnce(fakeResult);

    await getEmp(req, res);

    expect(res.json).toHaveBeenCalledWith({
      code: 200,
      message: 'Ok',
      data: fakeResult,
      metadata: {
        totalItems: countResult,
        itemsPerPage: pageSize,
        currentPage: page,
        totalPages: Math.ceil(countResult / pageSize),
      },
    });
  });
});
