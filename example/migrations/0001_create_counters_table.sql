-- Migration to create counters table for persistent counter storage
CREATE TABLE IF NOT EXISTS counters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    value INTEGER NOT NULL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on the name column for faster lookups
CREATE INDEX IF NOT EXISTS idx_counters_name ON counters(name);

-- Insert a default counter with initial value
INSERT OR IGNORE INTO counters (name, value) VALUES ('main', 0);