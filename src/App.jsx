import './App.css';
import { faker } from '@faker-js/faker';
import { Table } from 'antd';

function App() {
  // Create Random Data
  function createRandomUser() {
    return {
      id: faker.datatype.uuid(),
      type: faker.vehicle.type(),
      isLock: faker.helpers.arrayElement(['Lock', 'Unlock']),
      speed: faker.number.float({ min: 50, max: 180, precision: 1 }),
      battery: faker.number.float({ min: 0, max: 100, precision: 1 }),
      status: faker.helpers.arrayElement([
        'PARKING',
        'MOVING',
        'IDLING',
        'TOWING',
      ]),
      location: faker.location.latitude({ max: 10, min: -10, precision: 4 }),
      update: faker.date.past().toUTCString(),
      total: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    };
  }

  const Users = faker.helpers.multiple(createRandomUser, {
    count: 5,
  });

  //Define colums data pass to the table
  const columns = [
    {
      title: '',
      dataIndex: 'total',
      key: 'total',
      sorter: (a, b) => a.total - b.total,
    },
    {
      title: 'Vehicle ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type - b.type,
    },
    {
      title: 'Lock/Unlock',
      dataIndex: 'isLock',
      key: 'isLock',
      sorter: (a, b) => a.isLock - b.isLock,
    },
    {
      title: 'Current Speed',
      dataIndex: 'speed',
      key: 'speed',
      render: (speed) => <p>{speed} km/h</p>,
      sorter: (a, b) => a.speed - b.speed,
    },
    {
      title: 'Battery Level',
      dataIndex: 'battery',
      key: 'battery',
      render: (battery) => <p>{battery}%</p>,
      sorter: (a, b) => a.battery - b.battery,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status - b.status,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      sorter: (a, b) => a.location - b.location,
    },
    {
      title: 'Last Updated',
      dataIndex: 'update',
      key: 'update',
      sorter: (a, b) => a.update - b.update,
    },
  ];

  return (
    <>
      <header className="header">
        <h1>Vehicle Management</h1>
      </header>
      <div>
        <div className="add">
          <button>+ New Vehicle</button>
        </div>
        <Table dataSource={Users} columns={columns} className="table" />
      </div>
    </>
  );
}

export default App;
