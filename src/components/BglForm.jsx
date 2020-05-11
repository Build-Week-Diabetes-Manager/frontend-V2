import React, {useState} from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    TimePicker,
  } from 'antd';
  import moment from 'moment';
  moment().format(); 
  const BlgForm = () => {
    const [value, setValue] = useState('');
    const onFormLayoutChange = (time,str) => {
        console.log(time,str)
        setValue(str)
        
    };
    return (
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onValuesChange={onFormLayoutChange}
        >
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
              ]}
            />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
            onChange={onFormLayoutChange}
              options={[
                {
                  value: 'insulin',
                  label: 'Zhejiang',
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Day">
            <DatePicker onChange={onFormLayoutChange} />
          </Form.Item>
          <Form.Item>
            <Button onClick={()=> console.log(value)}>Add</Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
export default BlgForm;
