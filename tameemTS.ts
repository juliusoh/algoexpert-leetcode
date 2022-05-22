type FullName = {
  firstName: string;
  lastName: string;
};

const setFullName = <T extends FullName>(obj: T) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const final = setFullName({
  firstName: 'tameem',
  lastName: 'tameem',
  other: 'okay',
  abc: 'abc',
});

const useJulius = <T>(value: T): [T, (newValue: T) => T] => [
  value,
  (newValue) => newValue,
];

const [animal, setAnimal] = useJulius(true);

setAnimal(false)