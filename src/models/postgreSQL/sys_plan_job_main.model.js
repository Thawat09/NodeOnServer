const {DataTypes, Sequelize} = require('sequelize');
const {postgresDB} = require('../../configs/sequelize');

const SysPlanJobMain = postgresDB.define(
  'sys_plan_job_main',
  {
    unid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    main_job_id: {
      type: DataTypes.STRING,
    },
    call_id: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    type_job: {
      type: DataTypes.STRING,
    },
    onprocess_department: {
      type: DataTypes.STRING,
    },
    ref_doc_so: {
      type: DataTypes.STRING,
    },
    ref_doc_jb: {
      type: DataTypes.STRING,
    },
    ref_doc_qt: {
      type: DataTypes.STRING,
    },
    ref_doc_asset_no: {
      type: DataTypes.STRING,
    },
    ref_doc_sc: {
      type: DataTypes.STRING,
    },
    customer_soldtoparty: {
      type: DataTypes.STRING,
    },
    customer_soldtodesc: {
      type: DataTypes.STRING,
    },
    customer_billtoparty: {
      type: DataTypes.STRING,
    },
    customer_billtodesc: {
      type: DataTypes.STRING,
    },
    customer_shiptoparty: {
      type: DataTypes.STRING,
    },
    customer_shiptodesc: {
      type: DataTypes.STRING,
    },
    customer_email: {
      type: DataTypes.STRING,
    },
    customer_address: {
      type: DataTypes.STRING,
    },
    customer_province: {
      type: DataTypes.STRING,
    },
    customer_amphur: {
      type: DataTypes.STRING,
    },
    customer_district: {
      type: DataTypes.STRING,
    },
    customer_zipcode: {
      type: DataTypes.STRING,
    },
    customer_detail: {
      type: DataTypes.STRING,
    },
    customer_contact_name: {
      type: DataTypes.STRING,
    },
    customer_contact_tel: {
      type: DataTypes.STRING,
    },
    sim: {
      type: DataTypes.STRING,
    },
    sim_status: {
      type: DataTypes.STRING,
    },
    blackbox: {
      type: DataTypes.STRING,
    },
    serial_sim: {
      type: DataTypes.STRING,
    },
    installdate: {
      type: DataTypes.STRING,
    },
    truck_no: {
      type: DataTypes.STRING,
    },
    truck_province: {
      type: DataTypes.STRING,
    },
    cussea: {
      type: DataTypes.STRING,
    },
    vehicle_register_name: {
      type: DataTypes.STRING,
    },
    truck_model_name: {
      type: DataTypes.STRING,
    },
    truck_model: {
      type: DataTypes.STRING,
    },
    truck_side_no: {
      type: DataTypes.STRING,
    },
    blackbox_fimware: {
      type: DataTypes.STRING,
    },
    product: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    target_tcp: {
      type: DataTypes.STRING,
    },
    config_dms: {
      type: DataTypes.TEXT,
    },
    job_detail: {
      type: DataTypes.TEXT,
    },
    job_work_hd: {
      type: DataTypes.TEXT,
    },
    job_date_time: {
      type: DataTypes.STRING,
    },
    job_address: {
      type: DataTypes.STRING,
    },
    job_province: {
      type: DataTypes.STRING,
    },
    job_amphur: {
      type: DataTypes.STRING,
    },
    job_district: {
      type: DataTypes.STRING,
    },
    job_contact_name: {
      type: DataTypes.STRING,
    },
    job_contact_tel: {
      type: DataTypes.STRING,
    },
    job_note: {
      type: DataTypes.TEXT,
    },
    job_emp_id: {
      type: DataTypes.STRING,
    },
    job_emp_name: {
      type: DataTypes.STRING,
    },
    call_status: {
      type: DataTypes.STRING,
    },
    job_call_finish_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'job_call_finish_date_time',
    },
    status: {
      type: DataTypes.STRING,
    },
    create_emp_id: {
      type: DataTypes.STRING,
    },
    create_by: {
      type: DataTypes.STRING,
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'create_time',
    },
    edit_emp_id: {
      type: DataTypes.STRING,
    },
    edit_by: {
      type: DataTypes.STRING,
    },
    edit_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'edit_time',
    },
    job_finish_emp_id: {
      type: DataTypes.STRING,
    },
    job_finish_by: {
      type: DataTypes.STRING,
    },
    job_finish_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'job_finish_date_time',
    },
    job_work_hd_emp_id: {
      type: DataTypes.STRING,
    },
    job_work_hd_by: {
      type: DataTypes.STRING,
    },
    issue_fix_detail: {
      type: DataTypes.TEXT,
    },
    job_work_pc: {
      type: DataTypes.TEXT,
    },
    job_work_pc_emp_id: {
      type: DataTypes.STRING,
    },
    job_work_pc_by: {
      type: DataTypes.STRING,
    },
    checkbox_job_date_time: {
      type: DataTypes.STRING,
    },
    dms_aleart_detail: {
      type: DataTypes.TEXT,
    },
    main_job_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'main_job_date',
    },
    main_job_status: {
      type: DataTypes.STRING,
    },
    main_job_inform_type: {
      type: DataTypes.STRING,
    },
    ref_doc_qt_status: {
      type: DataTypes.STRING,
    },
    ref_doc_so_type: {
      type: DataTypes.STRING,
    },
    ref_job_sale_order_unid: {
      type: DataTypes.INTEGER,
    },
    contact_customer_date_time_back: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'contact_customer_date_time_back',
    },
    job_stock_detail: {
      type: DataTypes.TEXT,
    },
    sale: {
      type: DataTypes.STRING,
    },
    sale_phone: {
      type: DataTypes.STRING,
    },
    sale_email: {
      type: DataTypes.STRING,
    },
    cs_description: {
      type: DataTypes.TEXT,
    },
    email_dms: {
      type: DataTypes.STRING,
    },
    mdvr_ip: {
      type: DataTypes.STRING,
    },
    fuel_config: {
      type: DataTypes.STRING,
    },
    planing_id: {
      type: DataTypes.STRING,
    },
    planing_name: {
      type: DataTypes.STRING,
    },
    group_issue_id: {
      type: DataTypes.INTEGER,
    },
    job_close_sim_status: {
      type: DataTypes.STRING,
    },
    job_close_sim_by: {
      type: DataTypes.STRING,
    },
    job_close_sim_time: {
      type: DataTypes.DATE,
    },
    job_close_sim_ref: {
      type: DataTypes.TEXT,
    },
    detail_cancel: {
      type: DataTypes.STRING,
    },
    insurance: {
      type: DataTypes.STRING,
    },
    documenttype: {
      type: DataTypes.STRING,
    },
    installdatesc: {
      type: DataTypes.STRING,
    },
    timeatcreate: {
      type: DataTypes.STRING,
    },
    cs_approve_by: {
      type: DataTypes.STRING,
    },
    qt_document: {
      type: DataTypes.STRING,
    },
    cs_approve_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'cs_approve_time',
    },
    cs_status: {
      type: DataTypes.STRING,
    },
    hd_send_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'hd_send_time',
    },
    cs_detail_cancel: {
      type: DataTypes.TEXT,
    },
    customer_qt_cost: {
      type: DataTypes.STRING,
    },
    cs_edit_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'cs_edit_time',
    },
    cs_edit_by: {
      type: DataTypes.STRING,
    },
    cs_cancel_by: {
      type: DataTypes.STRING,
    },
    cs_cancel_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'cs_cancel_time',
    },
    cs_contact_name: {
      type: DataTypes.STRING,
    },
    cs_contact_tel: {
      type: DataTypes.STRING,
    },
    cs_contact_detail: {
      type: DataTypes.TEXT,
    },
    main_cancel_detail: {
      type: DataTypes.STRING,
    },
    cs_process_status: {
      type: DataTypes.STRING,
    },
    bill_process_status: {
      type: DataTypes.STRING,
    },
    stock_process_status: {
      type: DataTypes.STRING,
    },
    proactive_status: {
      type: DataTypes.STRING,
    },
    create_time_proactive: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'create_time_proactive',
    },
    ref_sws_main_unid: {
      type: DataTypes.INTEGER,
    },
    check_item_process_status: {
      type: DataTypes.STRING,
    },
    check_return_process: {
      type: DataTypes.STRING,
    },
    write_off_process_status: {
      type: DataTypes.STRING,
    },
    ck_not_use_all: {
      type: DataTypes.STRING,
    },
    xvalue: {
      type: DataTypes.STRING,
    },
    mat_doc: {
      type: DataTypes.STRING,
    },
    file_cancel: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'sys_plan_job_main',
    timestamps: false,
  }
);

module.exports = SysPlanJobMain;
