import React, { useState, useRef } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Checkbox } from './components/ui/checkbox';
import { Badge } from './components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs';
import { Plus, Trash2, ClipboardList, CheckCircle2 } from 'lucide-react';

type Priority = 'low' | 'medium' | 'high';
type Filter = 'all' | 'active' | 'completed';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: number;
}

const PRIORITY_COLORS: Record<Priority, string> = {
  low: 'bg-blue-100 text-blue-700 border-blue-200',
  medium: 'bg-amber-100 text-amber-700 border-amber-200',
  high: 'bg-red-100 text-red-700 border-red-200',
};

const PRIORITY_DOT: Record<Priority, string> = {
  low: 'bg-blue-500',
  medium: 'bg-amber-500',
  high: 'bg-red-500',
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Buy groceries', completed: false, priority: 'medium', createdAt: Date.now() - 3000 },
    { id: '2', text: 'Walk the dog', completed: true, priority: 'high', createdAt: Date.now() - 2000 },
    { id: '3', text: 'Read a book', completed: false, priority: 'low', createdAt: Date.now() - 1000 },
  ]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [filter, setFilter] = useState<Filter>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    setTodos(prev => [
      { id: crypto.randomUUID(), text, completed: false, priority, createdAt: Date.now() },
      ...prev,
    ]);
    setInput('');
    inputRef.current?.focus();
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed));
  };

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-md flex flex-col gap-5">

        {/* Header */}
        <div className="flex flex-col items-center gap-1 pt-4 pb-2">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-7 h-7 text-indigo-600" />
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">My Tasks</h1>
          </div>
          <p className="text-sm text-gray-500">
            {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
          </p>
        </div>

        {/* Input area */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addTodo()}
              placeholder="Add a new task..."
              className="flex-1 h-12 text-base rounded-xl bg-gray-50 border-gray-200 focus:bg-white"
            />
            <Button
              onClick={addTodo}
              disabled={!input.trim()}
              className="h-12 w-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 p-0 shrink-0"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>

          {/* Priority selector */}
          <div className="flex gap-2 items-center">
            <span className="text-xs text-gray-500 font-medium">Priority:</span>
            {(['low', 'medium', 'high'] as Priority[]).map(p => (
              <button
                key={p}
                onClick={() => setPriority(p)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  priority === p
                    ? `${PRIORITY_COLORS[p]} ring-2 ring-offset-1 ring-current`
                    : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${PRIORITY_DOT[p]}`} />
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Filter tabs */}
        <Tabs value={filter} onValueChange={v => setFilter(v as Filter)}>
          <TabsList className="w-full h-11 rounded-xl bg-gray-100 p-1">
            <TabsTrigger value="all" className="flex-1 rounded-lg text-sm">
              All
              <Badge variant="secondary" className="ml-1.5 h-5 text-xs px-1.5">{todos.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="active" className="flex-1 rounded-lg text-sm">
              Active
              <Badge variant="secondary" className="ml-1.5 h-5 text-xs px-1.5">{activeCount}</Badge>
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex-1 rounded-lg text-sm">
              Done
              <Badge variant="secondary" className="ml-1.5 h-5 text-xs px-1.5">{completedCount}</Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Todo list */}
        <div className="flex flex-col gap-2">
          {filteredTodos.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-12 text-gray-400">
              <CheckCircle2 className="w-12 h-12 opacity-30" />
              <p className="text-sm">
                {filter === 'completed' ? 'No completed tasks yet' :
                 filter === 'active' ? 'All tasks are done!' :
                 'No tasks yet. Add one above!'}
              </p>
            </div>
          ) : (
            filteredTodos.map(todo => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 bg-white rounded-2xl shadow-sm border px-4 py-3.5 transition-all ${
                  todo.completed ? 'border-gray-100 opacity-60' : 'border-gray-100'
                }`}
              >
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 rounded-full border-2 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600 shrink-0"
                />
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <span
                    className={`text-sm font-medium truncate ${
                      todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
                    }`}
                  >
                    {todo.text}
                  </span>
                  <span className={`inline-flex items-center gap-1 text-xs w-fit px-1.5 py-0.5 rounded-full border ${PRIORITY_COLORS[todo.priority]}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${PRIORITY_DOT[todo.priority]}`} />
                    {todo.priority}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-2 rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50 transition-colors touch-manipulation"
                  aria-label="Delete task"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {completedCount > 0 && (
          <div className="flex justify-center pb-4">
            <button
              onClick={clearCompleted}
              className="text-sm text-gray-400 hover:text-red-500 transition-colors underline underline-offset-2"
            >
              Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
