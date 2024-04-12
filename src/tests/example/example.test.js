const {
  examplePostgreSQL,
  exampleServerSQL,
} = require('../../controllers/example/example.contoller');

describe('examplePostgreSQL function', () => {
  const req = {};
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };

  const postgresDB = {authenticate: jest.fn()};
  const EmpInfo = {findAll: jest.fn()};

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return data from PostgreSQL database', async () => {
    req.query = {
      page: 1,
      pageSize: 4,
      orderBy: 'emp_code',
    };

    const fakeResult = [
      {
        unid: '81',
        username: 'DTC998',
        password: 'bddbe9a8e1bc01f5906f44aeed6b0a93',
        emp_code: 'DTC998',
        name_title: '',
        name_first: 'ชมสุธา',
        name_middle: '-',
        name_last: 'บุตรเตือน',
        emp_gender: '-',
        emp_birthday: null,
        emp_department: '',
        emp_division: '',
        emp_position: '',
        emp_email: '',
        emp_inphone: '',
        emp_picture: null,
      },
      {
        unid: '95',
        username: 'DTC993',
        password: '0e84db373d02b6beaa5b05510fb7a9a1',
        emp_code: 'DTC993',
        name_title: 'นางสาว',
        name_first: 'อลิสา',
        name_middle: '-',
        name_last: 'ปิตะแสง',
        emp_gender: '-',
        emp_birthday: null,
        emp_department: 'ฝ่ายบริการและปฎิบัติการองค์กร',
        emp_division: 'แผนกดูแลลูกค้าหลังการขาย',
        emp_position: 'พนักงาน',
        emp_email: 'alisa_p@dtc.co.th',
        emp_inphone: '117',
        emp_picture: null,
      },
      {
        unid: '68',
        username: 'DTC968',
        password: '9c2fb8df8ebb14f8a3258e511f0b7ea3',
        emp_code: 'DTC968',
        name_title: '005',
        name_first: 'จักรพันธ์',
        name_middle: '-',
        name_last: 'ช่อจำปี',
        emp_gender: '-',
        emp_birthday: null,
        emp_department: '-',
        emp_division: '',
        emp_position: '',
        emp_email: 'chakkapan@dtc.co.th',
        emp_inphone: '-',
        emp_picture: null,
      },
      {
        unid: '103',
        username: 'DTC960',
        password: '7765c388333c9da11eda0f8153f1443b',
        emp_code: 'DTC960',
        name_title: '',
        name_first: 'วัชรพล',
        name_middle: '-',
        name_last: 'สุขเกิด',
        emp_gender: '-',
        emp_birthday: null,
        emp_department: '',
        emp_division: '',
        emp_position: '',
        emp_email: '',
        emp_inphone: '',
        emp_picture: null,
      },
    ];

    const countResult = fakeResult.length;
    const pageSize = req.query.pageSize;
    const page = req.query.page;

    postgresDB.authenticate.mockResolvedValueOnce();
    EmpInfo.findAll.mockResolvedValueOnce(fakeResult);

    await examplePostgreSQL(req, res);

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

describe('exampleServerSQL function', () => {
  const req = {};
  const res = {
    status: jest.fn(() => res),
    json: jest.fn(),
  };

  const sqlServerDB = {authenticate: jest.fn()};
  const DtcVSimSuspend = {findAll: jest.fn()};

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return data from SQL Server database', async () => {
    req.query = {
      page: 1,
      pageSize: 4,
      orderBy: 'SIM Number',
    };

    const fakeResult = [
      {
        'SIM Number': ' 0850731139',
        EquipmentType: 'SIM',
        MaterialCode: null,
        'SIM Status': 'C',
        SuspendDate: null,
        CancelDate: null,
        CancelSuspendDate: null,
        Province: null,
        SizeDimension: 'V0S1G1_Biz&Ent 59bt_S103G/EDGE/GPRS40MB.',
        BlackBox: '',
        ModelNumber: '',
        ManufacturerNO: 'TRUE real futher',
        SaleDocument: null,
        SoldToParty: null,
        SoldToDesc: null,
        ShipToParty: null,
        ShipToDesc: null,
        OwnerCode: 'C010002283',
        ActiveStatus: 'True',
        LineNumber: '001',
      },
      {
        'SIM Number': ' 0854041704',
        EquipmentType: 'SIM',
        MaterialCode: null,
        'SIM Status': 'C',
        SuspendDate: null,
        CancelDate: null,
        CancelSuspendDate: null,
        Province: null,
        SizeDimension: 'V0S1G1_Biz&Ent 59bt_S103G/EDGE/GPRS40MB.',
        BlackBox: '',
        ModelNumber: '',
        ManufacturerNO: 'TRUE real futher',
        SaleDocument: null,
        SoldToParty: null,
        SoldToDesc: null,
        ShipToParty: null,
        ShipToDesc: null,
        OwnerCode: 'C020001234',
        ActiveStatus: 'True',
        LineNumber: '001',
      },
      {
        'SIM Number': ' 0867732744',
        EquipmentType: 'SIM',
        MaterialCode: null,
        'SIM Status': 'C',
        SuspendDate: null,
        CancelDate: null,
        CancelSuspendDate: null,
        Province: null,
        SizeDimension: 'V0S1G1_Biz&Ent 59bt_S103G/EDGE/GPRS40MB.',
        BlackBox: '',
        ModelNumber: '',
        ManufacturerNO: 'TRUE real futher',
        SaleDocument: null,
        SoldToParty: null,
        SoldToDesc: null,
        ShipToParty: null,
        ShipToDesc: null,
        OwnerCode: 'C010004610',
        ActiveStatus: 'True',
        LineNumber: '001',
      },
      {
        'SIM Number': ' 0882056732',
        EquipmentType: 'SIM',
        MaterialCode: null,
        'SIM Status': 'C',
        SuspendDate: null,
        CancelDate: null,
        CancelSuspendDate: null,
        Province: null,
        SizeDimension: 'V0S1G1_Biz&Ent 59bt_S103G/EDGE/GPRS40MB.',
        BlackBox: '',
        ModelNumber: '',
        ManufacturerNO: 'TRUE real futher',
        SaleDocument: null,
        SoldToParty: null,
        SoldToDesc: null,
        ShipToParty: null,
        ShipToDesc: null,
        OwnerCode: 'C010004512',
        ActiveStatus: 'True',
        LineNumber: '001',
      },
    ];

    const countResult = fakeResult.length;
    const pageSize = req.query.pageSize;
    const page = req.query.page;

    sqlServerDB.authenticate.mockResolvedValueOnce();
    DtcVSimSuspend.findAll.mockResolvedValueOnce(fakeResult);

    await exampleServerSQL(req, res);

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
