import { Briefcase, SquareUser } from 'lucide-react';
import type { RoleSelectProps } from '../types/company';

export const accountList: RoleSelectProps[] = [
  {
    heading: 'As employee',
    description:
      'Efficiently manage your team with our user-friendly dashboard. Simplify tracking and automate tasks.',
    icon: Briefcase,
  },
  {
    heading: 'As manager',
    description:
      'As a manager, simplify HR tasks with our dashboard. Oversee staff, track attendance, automate processes.',
    icon: SquareUser,
  },
];
