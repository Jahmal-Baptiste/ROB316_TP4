function timed_benchmark2D(map,start_pt,goal_pt,algo,variant,max_iter)
%TIMED_BENCHMARK2D Summary of this function goes here
%   Detailed explanation goes here
  t = tic;
  benchmark2D(map,start_pt,goal_pt,algo,variant,max_iter)
  e = toc(t)
  
end

