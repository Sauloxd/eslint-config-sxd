export function fibonacci(iteration: number): number {
  if (iteration === 0) return 0;
  if (iteration === 1) return 1;
  if (iteration === 2) return 1;

  return fibonacci(iteration - 2) + fibonacci(iteration - 1);
}

type Comment = {
  message: string;
  createdAt: Date;
};

type Commentable<T = Record<any, any>> = T & {
  comments: Comment[];
  setComment: (message: string) => void;
};

export function commentable<T>(entity: T): Commentable<T> {
  const comments: Comment[] = [];

  return {
    ...entity,
    comments,
    setComment(message) {
      comments.push({
        message,
        createdAt: new Date(),
      });
    },
  };
}
