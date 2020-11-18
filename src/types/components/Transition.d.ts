declare namespace Transition {
  type Animation = 'fadeIn' | 'fadeInUp' | 'fadeOut';

  type Timing = {
    enter: number;
    exit: number;
  };

  interface Props {
    children: React.Node;
    delay?: number | Timing;
    duration: number | Timing;
    in?: boolean;
    enter?: string;
    exit?: string;
  }
}
