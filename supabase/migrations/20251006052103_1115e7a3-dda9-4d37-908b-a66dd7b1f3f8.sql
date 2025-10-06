-- Create profiles table for user information
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  nickname text not null,
  interests text,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Enable RLS
alter table public.profiles enable row level security;

-- RLS Policies
create policy "Users can view all profiles"
  on public.profiles for select
  using (true);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Function to handle new user
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, nickname, interests)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'nickname', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'interests', '')
  );
  return new;
end;
$$;

-- Trigger to create profile on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to update updated_at
create function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Trigger for updated_at
create trigger on_profile_updated
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();